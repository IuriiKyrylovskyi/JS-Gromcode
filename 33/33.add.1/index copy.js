const url = 'https://api.github.com';

const getAllCommitsAuthors = commits => commits.map(com => com.commit.author);

const filterAuthorsPerPeriod = (authors, days) =>
  authors.filter(
    authorData =>
      new Date().getTime() - new Date(authorData.date).getTime() <= days * 24 * 60 * 60 * 1000,
  );

const getAuthorsPerPeriod = (commits, days) =>
  commits.filter(com =>
    new Date().getTime() - new Date(com.commit.author.date).getTime() <= days * 24 * 60 * 60 * 1000
      ? console.log(
          Object.assign(
            {},
            {
              date: com.commit.author.date,
              name: com.commit.author.name,
              email: com.commit.author.email,
            },
          ),
        )
      : false,
  );

const flatMapAuthors = (commits, days) =>
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

// const reduceAuthors = (commits, days) =>
//   commits.reduce(
//     (acc, { date, name, email }) => [
//       ...acc,
//       new Date().getTime() - new Date(date).getTime() <= days * 24 * 60 * 60 * 1000
//         ? [name, email]
//         : [],
//     ],
//     {},
//   );

const countAuthorsCommits = commits => {
  const author = {};
  console.log(commits);
  commits.forEach(commit => {
    const { name, email } = commit;
    console.log({ name, email });

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
    .then(commits => flatMapAuthors(commits, days))
    // .then(commits => reduceAuthors(commits, days))
    // .then(commits => getAllCommitsAuthors(commits))
    // .then(authors => getAuthorsPerPeriod(authors, days))
    // .then(authors => filterAuthorsPerPeriod(authors, days))
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


// // authors.reduce((acc, item) => {
// //   if (!acc.length) {
// //     return [item];
// //   }
// //   if (item.count > acc[0].count) {
// //     return [item];
// //   } else if (item.count === acc[0].count) {
// //     acc.push(item);
// //     return acc;
// //   }
// // }, []);