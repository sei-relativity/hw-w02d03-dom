const createImage = function () {
    let url = 'https://source.unsplash.com/random/' + width +'/'+ height;
    let newImage = document.createElement('img') ;
    newImage.setAttribute('src', url);
