const url = 'https://api.github.com';

const getAuthorsDataByPeriod = (commits, days) =>
  commits.flatMap(commit =>
    new Date().getTime() - new Date(commit.commit.author.date).getTime() <=
    days * 24 * 60 * 60 * 1000
      ? {
          date: commit.commit.author.date,
          name: commit.commit.author.name,
          email: commit.commit.author.email,
        }
      : [],
  );


const countAuthorsCommits = commits => {
  const result = commits.reduce((acc, commit) => {
    const { count = 1, name, email } = commit;

    if (acc[name]) {
      acc[name].count = acc[name].count + 1;
      return acc;
    }

    acc[name] = { count, name, email };
    return acc;
  }, {});

  return Object.values(result);
};

const sortAuthorsByActivness = authors =>
  authors.sort((authorPrev, authorNext) => authorNext.count - authorPrev.count);

const mostActiveAuthors = authors =>
  authors.filter(author => {
    const max = authors[0].count;
    return author.count === max;
  });

export const getMostActiveDevs = ({ days, userId, repoId }) =>
  fetch(`${url}/repos/${userId}/${repoId}/commits?per_page=100`)
    .then(response => response.json())
    .then(commits => getAuthorsDataByPeriod(commits, days))
    .then(commits => countAuthorsCommits(commits))
    .then(authors => sortAuthorsByActivness(authors))
    .then(authors => mostActiveAuthors(authors));

// const user1 = {
//   days: 257,
//   userId: 'andrii142',
//   repoId: 'developer-roadmap',
// };

// console.log(getMostActiveDevs(user1));

// const user2 = {
//   days: 27,
//   userId: 'IuriiKyrylovskyi',
//   repoId: 'Calendar_project_js',
// };

// console.log(getMostActiveDevs(user2));
