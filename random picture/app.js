var imagesArray = ["https://source.unsplash.com/1600x900", "https://source.unsplash.com/1600x900", "https://source.unsplash.com/1600x900", "https://source.unsplash.com/1600x900", "https://source.unsplash.com/1600x900"];

function newRandomImage() {
    let num = Math.floor(Math.random() * 5);
    document.canvas.src = imagesArray[num];
}