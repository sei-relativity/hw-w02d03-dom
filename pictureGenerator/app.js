//  Create a new image

const randImg = document.querySelector("#randomize");
const imgDiv = document.querySelector(".image");

const displayRandomImage = function(event){
    const newImg = document.createElement('img');
    newImg.src = "https://source.unsplash.com/1600x900";

    imgDiv.prepend(newImg);
}
randImg.addEventListener('click', displayRandomImage);