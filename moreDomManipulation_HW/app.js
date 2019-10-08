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

////The Book List
var books = [
    {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        alreadyRead: true
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        alreadyRead: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: true
    }
];
const newh1 = document.createElement('h1');
newh1.innerText = 'My Book List';
document.querySelector('div.favoriteBooks').appendChild(newh1);

for (i of books) {
    const newbook = document.createElement('p');
    newbook.innerText = i.title + ', ' + i.author;
    document.body.appendChild(newbook)
}