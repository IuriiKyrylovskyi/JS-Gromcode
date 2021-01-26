export const squaredNumbers = () => {
	
	const numberEls = document.querySelectorAll('.number');
  console.dir(numberEls);

  const newNumberEls = Array.from(numberEls).map(numEl => {
    const num = numEl.dataset.number;
    const squaredNum = num * num;
    numEl.dataset.squaredNumber = squaredNum;
    return numEl;
  });

  return newNumberEls;
};

// squaredNumbers();
