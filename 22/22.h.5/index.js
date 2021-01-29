const singleUseBtn = document.querySelector('.single-use-btn');

const singleClick = () => {
  console.log('clicked');
  singleUseBtn.removeEventListener('click', singleClick);
};

singleUseBtn.addEventListener('click', singleClick);
