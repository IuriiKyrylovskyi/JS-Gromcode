const url = 'https://api.github.com';

const mostActiveAuthors = (commits, days) => {
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

  return Object.values(result)
    .sort((authorPrev, authorNext) => authorNext.count - authorPrev.count)
    .filter((author, _, authors) => {
      const max = authors[0].count;
      return author.count === max;
    });
};

export const getMostActiveDevs = ({ days, userId, repoId }) =>
  fetch(`${url}/repos/${userId}/${repoId}/commits?per_page=100`)
    .then(response => response.json())
    .then(authors => mostActiveAuthors(authors, days));

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
