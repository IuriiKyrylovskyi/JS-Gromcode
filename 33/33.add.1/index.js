const url = 'https://api.github.com';

// https://api.github.com/repos/{owner}/{repo}
// https://api.github.com/repos/IuriiKyrylovskyi/Calendar_project_js/commits?per_page=100

// console.log(new Date().getTime());
// console.log(new Date('2021-03-08T21:40:05Z').getTime());
// console.log(7 * 24 * 60 * 60 * 1000);

const getAllCommitsAuthors = commits => commits.map(com => com.commit.author);

const getAuthorsPerPeriod = (authors, days) =>
  authors.filter(
    authorData =>
      new Date().getTime() - new Date(authorData.date).getTime() <= days * 24 * 60 * 60 * 1000,
  );

// const getCommitsByPeriod = (commits, days) => {
//   commits
//     .map(commit => commit.commit.author)
//     .filter(
//       authorData =>
//         new Date().getTime() - new Date(authorData.date).getTime() <= days * 24 * 60 * 60 * 1000,
//     );
// };

const countAuthorsCommits = commits => {
  const author = {};

  commits.forEach(commit => {
    const { name, email } = commit;
    // console.log({ name, email });

    if (author[name]) {
      author[name].count++;
      return;
    }

    const count = 1;

    author[name] = { count, name, email };
  });
  // console.log(Object.values(author));
  // console.log(Object.values(author)[0].count);

  return Object.values(author);
};
// console.log(countAuthorsCommits(test));

const sortAuthorsByActivness = authors =>
  authors.sort((authorPrev, authorNext) => authorNext.count - authorPrev.count);

const mostActiveAuthors = authors =>
  authors.filter(author => {
    const max = authors[0].count;
    // console.log(max);
    // console.log(author.count);

    return author.count === max;
  });

// const getAuthorData = (days = 17, userId = 'IuriiKyrylovskyi', repoId = 'Calendar_project_js') =>
export const getMostActiveDevs = ({ days, userId, repoId }) =>
  fetch(`${url}/repos/${userId}/${repoId}/commits?per_page=100`)
    .then(response => response.json())
    // .then(commits =>
    //   commits
    //     .map(commit => commit.commit.author)
    //     .filter(
    //       authorData =>
    //         new Date().getTime() - new Date(authorData.date).getTime() <=
    //         days * 24 * 60 * 60 * 1000,
    //     ),
    // )
    .then(commits => getAllCommitsAuthors(commits))
    .then(authors => getAuthorsPerPeriod(authors, days))
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
