

const newImg = document.createElement('img');

const img = document.querySelector('.image');


img.appendChild(newImg)


const src =function(){
    
    newImg.setAttribute('src','https://source.unsplash.com/random')
};

const button = document.querySelector('button#randomize');


button.addEventListener('click',src)
