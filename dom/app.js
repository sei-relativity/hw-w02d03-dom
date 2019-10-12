const clickImageButton = document.querySelector('#randomize');

function createImage(){
    const newImage =document.createElement('img');


    const width= document.querySelector('.width').value;
    const height= document.querySelector('.height').value;

    
    const url ='https://loremflickr.com/'+ width +"x"+ height;
    newImage.setAttribute('src',url);

    imgDiv =document.querySelector('div.image');
    imgDiv.appendChild(newImage);

}

clickImageButton.addEventListener('click',createImage);


// it is not working with me 