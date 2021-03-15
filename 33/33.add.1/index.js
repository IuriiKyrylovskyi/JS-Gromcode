const url = 'https://api.github.com';

// https://api.github.com/repos/{owner}/{repo}
// https://api.github.com/repos/IuriiKyrylovskyi/Calendar_project_js/commits?per_page=100

// console.log(new Date().getTime());
// console.log(new Date('2021-03-08T21:40:05Z').getTime());
// console.log(7 * 24 * 60 * 60 * 1000);

const testArr = commits => {
  const author = {};

  commits.forEach(commit => {
    // const count = 0;

    const { name, email } = commit;
    // console.log({ name, email });
    // const author = counter[name] ? counter[name] : { count, name, email };

    if (author[name]) {
      author[name].count++;
      return;
    }

    const count = 1;

    // counter[name] = { count: author.count + 1, name, email };
    author[name] = { count, name, email };
  });

  // console.log(Object.values(author));
  // console.log(Object.values(author)[0].count);

  return Object.values(author);
  // for (let element in counter) {
  //   console.log(element + ' = ' + counter[element]);
  // }
};

// console.log(testArr(test));

const sortAuthorByActivness = authors =>
  authors.sort((authorPrev, authorNext) => authorNext.count - authorPrev.count);

const mostActiveAuthors = authors =>
	authors.filter((author) => {
		
    const max = authors[0].count;
    // console.log(max);
    // console.log(author.count);
    
		return author.count === max;
  });

// const getRepoData = (days = 7, userId = 'IuriiKyrylovskyi', repoId = 'Calendar_project_js') =>
const getRepoData = (days = 237, userId = 'andrii142', repoId = 'developer-roadmap') =>
  fetch(`${url}/repos/${userId}/${repoId}/commits?per_page=100`)
    .then(response => response.json())
    .then(commits =>
      commits
        .map(commit => commit.commit.author)
        .filter(
          authorData =>
            new Date().getTime() - new Date(authorData.date).getTime() <=
            days * 24 * 60 * 60 * 1000,
        ),
    )
    .then(res => testArr(res))
    .then(res => sortAuthorByActivness(res))
    .then(res => mostActiveAuthors(res));

console.log(getRepoData());

// const getAuthorData = getRepoData().then(commits => commits.map(commit => commit.commit.author));

// console.log(getAuthorData);
// const getDays = Number(new Date()) - new Date(commit);

// const ttt = getRepoData().then(result => getValues(result));
// console.log(typeof ttt);

// console.log(getValues(ttt));
// // export
// const getMostActiveDevs = user => getRepoData(userId, repoId).then(result => console.log(result));

// const userInfo = {
//   // days: 0,
//   id: '65412895',
//   repoId: 'Calendar_project_js',
// };

// getMostActiveDevs(userInfo).then(result => console.log(result));
// ==============================================================================================
// // export
// const getTaskById = taskId =>
//   fetch(`${baseUrl}?id=${taskId}`)
//     .then(response => response.json())
// 		.then(arr => arr.pop());

// const getTaskByText = taskText =>
//   fetch(`${baseUrl}?text=${taskText}`)
//     .then(response => response.json())
//     .then(arr => arr.pop());

// // examples
// getTasksList().then(tasksList => {
//   console.log(tasksList); // array of the task objects - [ {'id':'1', 'done':false ... }, {'id':'2', 'done':true ... }, ...]
// });

// getTaskById('2').then(taskData => {
//   console.log(taskData); // {'id':'2', 'done':true ... }
// });

// .reduce(
//   (acc, value) => ({
//     ...acc,
//     [value.name]: (acc[value.name] || 0) + 1,
//   }),
//   [],
// ),
