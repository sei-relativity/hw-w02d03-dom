
document.querySelector('body').style.fontFamily = "Arial, sans-serif";

document.getElementById("nickname").innerText="Mesfer";
document.getElementById("favorite").innerText="Tiger";
document.getElementById("hometown").innerText="Riyadh";
let listItems = document.querySelectorAll('li');

for (let i = 0; i < listItems.length; i++) {
    const element = listItems[i];
    element.setAttribute('class', 'listitem');
    element.style.color = 'rebeccapurple';
}

const createImage =  function() {
    let x = document.createElement("IMG");
    x.setAttribute("src", "https://cdn.pixabay.com/photo/2016/11/29/04/19/beach-1867285_1280.jpg");
    x.setAttribute("width", '100px');
    // x.setAttribute("height", "auto");
    x.setAttribute("alt", "createImage");
    document.body.querySelector('div.profilePicture').appendChild(x);
  }
  createImage()