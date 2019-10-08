const image= document.querySelector("div.image")
const newImage= document.createElement("img");
image.appendChild(newImage);

let url = "https://source.unsplash.com/random/";

const randomImages = function () {

url+=Math.floor(Math.random());

newImage.setAttribute("src", url);}

document.querySelector('#randomize').addEventListener("click", randomImages);