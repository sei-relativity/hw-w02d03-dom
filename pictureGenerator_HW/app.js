


const takeMine = function () {
    const width = document.querySelector('input.width').value;
    width.value;
    const height = document.querySelector('input.height').value;
    const web = document.querySelector('#options').value;
    let src;
    if (web == "https://source.unsplash.com/") {
        src = web + width + 'x' + height;
    }
    else {
        src = web + width + '/' + height;
    }

    const currentImage = document.querySelector('.image');
    if (document.querySelector('.child')) {
        const currentImageChild = document.querySelector('.child');
        currentImage.removeChild(currentImageChild);
    }
    const rImg = document.createElement('img');

    rImg.setAttribute('src', src);
    rImg.className = 'child';
    currentImage.appendChild(rImg);

}
const randomImg = function () {
    const width = Math.floor(Math.random() * 1000);
    const height = Math.floor(Math.random() * 1000);
    const web = document.querySelector('#options').value;
    let src;
    if (web == "https://source.unsplash.com/") {
        src = web + width + 'x' + height;
    }
    else {
        src = web + width + '/' + height;
    }

    const currentImage = document.querySelector('.image');
    if (document.querySelector('.child')) {
        const currentImageChild = document.querySelector('.child');
        currentImage.removeChild(currentImageChild);
    }
    const rImg = document.createElement('img');

    rImg.setAttribute('src', src);
    rImg.className = 'child';
    currentImage.appendChild(rImg);

}