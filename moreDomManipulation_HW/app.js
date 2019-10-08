console.log(document.body.style.fontFamily, 'here')
document.body.style.fontFamily = "Arial, sans-serif";
console.log(document.body.style.fontFamily)
document.querySelector('span#nickname').innerText = 'Timon';
document.querySelector('span#favorite').innerText = 'Spider';
document.querySelector('#hometown').innerText = 'El Paso';
const listitem = document.querySelectorAll('li');

for (i of listitem) {
    i.classList.add("listitem");
}
console.log(listitem);
document.querySelectorAll('.listitem');
for (i of listitem) {
    i.style.color = "rebeccapurple";
}
const newImg = document.createElement('img');
newImg.setAttribute('src', 'timon.png');
document.querySelector('div.profilePicture').appendChild(newImg);