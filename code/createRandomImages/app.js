// event listener



let width = document.querySelector(".width").value;
let height = document.querySelector('.height').value;


const createImage = function () {
   let url = 'https://source.unsplash.com/random/' + width +'/'+ height;
   let newImage = document.createElement('img') ;
   newImage.setAttribute('src', url);

   let newImageLocation = document.querySelector('.image');
   newImageLocation.appendChild(newImage);
}


document.querySelector('#randomize').addEventListener('click', createImage);
