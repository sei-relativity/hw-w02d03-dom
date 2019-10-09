const btn = document.querySelector('button');

const widthValue = document.querySelector(".width");

const heightValue = document.querySelector(".height");

widthValue.setAttribute("value" , "")
heightValue.setAttribute("value" , "");

const imgDiv = document.querySelector("div.image");
const image = document.createElement("img");
imgDiv.appendChild(image);

const createImg = function(){
    image.setAttribute("src" , "https://source.unsplash.com/random/"+widthValue+"*"+heightValue)
}

btn.addEventListener("click" , createImg);
