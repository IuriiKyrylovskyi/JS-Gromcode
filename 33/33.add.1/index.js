const url = 'https://api.github.com';

// const getAuthorsDataByPeriod = (commits, days) =>
//   commits.flatMap(commit =>
//     new Date().getTime() - new Date(commit.commit.author.date).getTime() <=
//     days * 24 * 60 * 60 * 1000
//       ? {
//           date: commit.commit.author.date,
//           name: commit.commit.author.name,
//           email: commit.commit.author.email,
//         }
//       : [],
//   );

const countAuthorsCommits = (commits, days) => {
  const result = commits.reduce((acc, commit) => {
    if (
      new Date().getTime() - new Date(commit.commit.author.date).getTime() >
      days * 24 * 60 * 60 * 1000
    ) {
      return acc;
    }

    const { count = 1, name, email } = commit.commit.author;

    if (acc[name]) {
      acc[name].count++;
      return acc;
    }

    acc[name] = { count, name, email };
    return acc;
  }, {});

  return Object.values(result).reduce((acc, obj, index) => {
    const { count, name, email } = obj;
    console.log({ count, name, email });
    if (acc[index].count < acc[index + 1].count) {
      acc[index + 1].count;
      return acc;
    }
    acc.push(acc[index + 1][count]);
    return acc;
  }, []);
  // .sort((authorPrev, authorNext) => authorNext.count - authorPrev.count)
  // .filter((author, index, authors) => {
  //   const max = authors[0].count;
  //   return author.count === max;
  // });
};

const mostActiveAuthors = authors =>
  authors
    .sort((authorPrev, authorNext) => authorNext.count - authorPrev.count)
    .filter(author => {
      const max = authors[0].count;
      return author.count === max;
    });

export const getMostActiveDevs = ({ days, userId, repoId }) =>
  fetch(`${url}/repos/${userId}/${repoId}/commits?per_page=100`)
    .then(response => response.json())
    // .then(commits => getAuthorsDataByPeriod(commits, days))
    .then(commits => countAuthorsCommits(commits, days));
// .then(authors => sortAuthorsByActivness(authors))
// .then(authors => mostActiveAuthors(authors));

// ---------------------------------------------------------
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
