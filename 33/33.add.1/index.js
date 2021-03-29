const url = 'https://api.github.com';

const getAllCommitsAuthors = commits => commits.map(com => com.commit.author);

const filterAuthorsPerPeriod = (authors, days) =>
  authors.filter(
    authorData =>
      new Date().getTime() - new Date(authorData.date).getTime() <= days * 24 * 60 * 60 * 1000,
  );

const countAuthorsCommits = commits => {
  const author = {};

  commits.forEach(commit => {
    const { name, email } = commit;

    if (author[name]) {
      author[name].count++;
      return;
    }

    const count = 1;

    author[name] = { count, name, email };
  });

  return Object.values(author);
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
    .then(commits => getAllCommitsAuthors(commits))
    .then(authors => filterAuthorsPerPeriod(authors, days))
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
