const paginationPages = document.querySelectorAll('.pagination__page');

const handleClick = event => {
  // console.log(event.target.querySelector('[data-page-number]')); // // doesn't work!?
  // console.log(event.target.getAttribute('data-page-number')); // // #1
  console.log(event.target.dataset.pageNumber); // #2
};

const paginationPageData = Array.from(paginationPages).map(btn =>
  btn.addEventListener('click', handleClick),
);
