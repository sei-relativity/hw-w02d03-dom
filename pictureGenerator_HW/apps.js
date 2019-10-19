function display_random_img(){
   

    
    //loop for getting the images
let Buffering = [];

for (let i=0; i<Imgs.length; i++ ){
    Buffering[i] = new Images();
    Buffering[i].src = Imgs[i].src;
    Buffering[i].height = Imgs[i].height;
    Buffering[i].width = Imgs[i].width;

}

//Function randomNum

function randomNum(min, max){
    random= Math.floor(Math.random() * (max - min + 1)) + min;
    return Buffering[random];
}
    let newImg = randomNum(0, Buffering.length-1);
    
//remove previous image
let images = document.querySelector('img');
for (let p = 0; p < images.length; p++) {
    images[0].image.removeChild(images[0]);
}

//display image
document.body.appendChild(newImg);

}