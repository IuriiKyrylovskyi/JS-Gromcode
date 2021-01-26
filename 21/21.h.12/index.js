export const getSection = num => {
  const spanEl = document.querySelector(`[data-number="${num}"]`);
  // console.dir(spanEl.getAttribute('data-number'));

  const closParent = spanEl.closest('.box');

  return closParent.getAttribute('data-section');
};

// console.dir(getSection(3));
