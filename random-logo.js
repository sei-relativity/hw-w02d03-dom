const widthValue = document.querySelector(".width");
const heightValue = document.querySelector(".height");
const btn = document.querySelector("button");
const imageDiv = document.querySelector("div.image");
const img = document.createElement("img");

widthValue.setAttribute("value", "");
heightValue.setAttribute("value", "");


imageDiv.appendChild(img);


console.log(btn);

const randomizeImg = function(){
    img.setAttribute("src", "https://source.unsplash.com/random/"+ widthValue + "*" + heightValue);
};

btn.addEventListener("click", randomizeImg);