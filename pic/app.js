const newImg = document.querySelector('div.image');
const img = document.createElement('img');
newImg.appendChild(img);
let url = "https://source.unsplash.com/1600x900";
const boot = document.querySelector('button')
const wi = document.querySelector('.width');
const hei = document.querySelector('.height');

const onclick = function (){
    const w = wi.value;
    const h = hei.value;
    url+="?"+Math.floor(Math.random()*1000);
    img.setAttribute("src",url);

    img.setAttribute("width",w);
    img.setAttribute("height",h);
}

boot.addEventListener("click",onclick);


