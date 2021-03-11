export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'my photo');
  imgElem.src = imgSrc;

  const pageElem = document.querySelector('.page');
  pageElem.append(imgElem);

  const onImgLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };

  imgElem.addEventListener('load', onImgLoaded);

  imgElem.addEventListener('error', () => callback('Image load is failed...'));
};

//callack example
const onImageLoaded = (error, imgElem) => {
	const sizeElem = document.querySelector('.image-size');
  if (error) {
    console.log(error);
    // sizeElem.textContent = `Image load is failed...`;

    return;
  }
  const { width, height } = imgElem;
  sizeElem.textContent = `${width} x ${height}`;
};

//test call
addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bistock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded,
);
