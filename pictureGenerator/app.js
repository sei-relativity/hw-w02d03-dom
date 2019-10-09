const image = document.createElement("img");
let createRandomImage = function () {
    let url = ("https://picsum.photos/200");
    let imageDiv = document.querySelector(".image");
    image.setAttribute("src", url);
    imageDiv.appendChild(image);
}
let randomButton = document.querySelector("button#randomize");
randomButton.addEventListener("click", createRandomImage); 