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
  // const author = {};
  const result = commits.reduce((acc, commit) => {
    const { name, email } = commit;
    let count = 1;

    if (acc[name]) {
      acc[name].count++;
      return;
    }


    acc[name] = { count, name, email };
    console.log(acc);

    return acc;
  }, {});

  return Object.values(result);
};

// const countAuthorsCommits = commits => {
//   const author = {};
//   commits.forEach(commit => {
//     const { name, email } = commit;

//     if (author[name]) {
//       author[name].count++;
//       return;
//     }

//     const count = 1;

//     author[name] = { count, name, email };
//   });

//   return Object.values(author);
// };

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

const user1 = {
  days: 257,
  userId: 'andrii142',
  repoId: 'developer-roadmap',
};

console.log(getMostActiveDevs(user1));

const user2 = {
  days: 27,
  userId: 'IuriiKyrylovskyi',
  repoId: 'Calendar_project_js',
};

console.log(getMostActiveDevs(user2));
