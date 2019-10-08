const button  = document.querySelector('#randomize');
const  addImg =function() {
// console.log("test)
const Widtht= document.querySelector('.width').value;
const height =document.querySelector('.height').value;
const newSrc= "https://source.unsplash.com/"+Widtht+"x"+height;

console.log(newSrc);

const newImg =document.createElement("img");
newImg.setAttribute('src',newSrc);
newImg.style.paddingTop ="50px"
const divImg =document.querySelector('.image');
divImg.appendChild(newImg);

}

button.addEventListener("click", addImg);