


const ranimage = document.createElement('img');
ranimage.setAttribute('src', 'https://source.unsplash.com/collection/190727/1600x900');
document.body.appendChild(ranimage);



const w = document.getElementsByClassName('width');

const h = document.getElementsByClassName('height');


document.getSelection('number').innerHTML = w.innerHTML + h.innerHTML;