const button  = document.querySelector("#randomize");
const createImage = function() {
    let width = Math.floor(Math.random() * 400)
    let height = Math.floor(Math.random() * 400)
    let randomSrc= "https://source.unsplash.com/" + width + "x" + height;
    let generateImg = document.createElement("img");
    generateImg.setAttribute("src", randomSrc);
    let imgTag = document.querySelector(".image");
    imgTag.appendChild(generateImg);
}

button.addEventListener("click", createImage)
