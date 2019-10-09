// Create an img element
const image = document.createElement("img");

// Get entered width and height values
let width = document.querySelector("input.width");
let height = document.querySelector("input.height");

// Create a randomized URL based on width and height values
let createRandomImage = function () {
    let url = ("https://picsum.photos/" + width.value + "/" + height.value);
    console.log(url);
    let imageDiv = document.querySelector(".image");
    image.setAttribute("src", url);
    imageDiv.appendChild(image);
}

// Event listener for clicking button#randomize:
let randomizeBtn = document.querySelector("button#randomize");
randomizeBtn.addEventListener("click", createRandomImage);