export const getTitle = () => document.querySelector('.title').textContent;
// console.dir(getTitle);

// const getTitle = () => {
//   const title = document.querySelector('.title');
//   // console.dir(title.textContent);
//   return title.textContent;
// };

// getTitle();

// ------------------------------------------------------
export const getDescription = () => document.querySelector('.about').innerText;
// console.dir(getDescription);

// const getDescription = () => {
//   const element = document.querySelector('.about');
//   // console.dir(element.innerText);
//   return element.innerText;
// };

// getDescription();

// --------------------------------------------------------
// // export
// const getPlans = () => {
//   console.dir(document.querySelector('.plans').innerHTML);
//   return document.querySelector('.plans').innerHTML;
// };

// getPlans();

export const getPlans = () => document.querySelector('.plans').innerHTML;

// console.dir(getPlans());
// ---------------------------------------------------------
export const getGoal = () => document.querySelector('.goal').outerHTML;

// console.dir(getGoal());
