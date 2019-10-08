
const h =document.querySelector('.height').value;
h.setAttribute('value','height');

const w =document.querySelector('.width').value;
w.setAttribute('value','width');

document.querySelector('#randomize').addEventListener('click', createImage);

function myFunction() {
const img = document.queryElement('.image');
const url = 'https://source.unsplash.com/random/' + w +'/'+ h;
img.setAttribute('src',url);

const imgLocation = document.querySelector('.image');
imgLocation.appendChild(newImage);
}
