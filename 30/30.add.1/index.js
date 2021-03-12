import { addImage } from './addImage.js';

export const addImageV2 = url => {
  const p = new Promise((resolve, reject) => {
    addImage(url, (error, data) => {
      if (error) reject(error);
      else {
        resolve(data);
        const { width, height } = data;
        const sizeElem = document.querySelector('.image-size');
        sizeElem.textContent = `${width} x ${height}`;
      }
    });
  });
  return p;
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

addImageV2(imgSrc)
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'
