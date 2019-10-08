document.body.style.fontFamily = "Arial, sans-serif";

const spanArr = document.querySelectorAll('span');
const valuesArr = ['hamjahb', 'Sea Otter', 'Riyadh'];

for (let i = 0; i < spanArr.length; i++) {
    spanArr[i].innerText = valuesArr[i];
}


const list = document.querySelectorAll('li')
for (let i = 0; i < list.length; i++) {
    list[i].setAttribute('class', 'listItem');
    list[i].style.color = ('rebeccapurple');
}

const newImg = document.createElement('img');
const imgLocation = "https://www.fillmurray.com/400/400"
const targetLocation = document.querySelector('.profilePicture')
newImg.setAttribute('src', imgLocation);
targetLocation.appendChild(newImg)
