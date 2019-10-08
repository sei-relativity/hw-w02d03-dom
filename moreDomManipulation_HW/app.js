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
newImg.setAttribute('src', 'images/timon.png');
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

const favoriteBooks = document.querySelector('div.favoriteBooks');
const newh1 = document.createElement('h1');
newh1.innerText = 'My Book List';
favoriteBooks.appendChild(newh1);
const unorderedList = document.createElement('ul');
favoriteBooks.appendChild(unorderedList);
for (i of books) {
    const newbook = document.createElement('li');
    const bookimg = document.createElement('img');
    newbook.innerText = i.title + ', ' + i.author;
    if (i.alreadyRead)
        newbook.style.color = 'green';
    else
        newbook.style.color = 'red'
    unorderedList.appendChild(newbook)
    switch (i.title) {
        case 'The Design of Everyday Things':
            bookimg.setAttribute('src', 'images/thedesignofeverydaythings.jpg');

            break;
        case "The Most Human Human":
            bookimg.setAttribute('src', 'images/TheMostHumanHuman.jpg');
            break;
        case "In Search of Lost Time":
            bookimg.setAttribute('src', 'images/InSearchofLostTime.jpg');
            break;
        case "Ulysses":
            bookimg.setAttribute('src', 'images/Ulysses.jpg');
            break;
        case "The Great Gatsby":
            bookimg.setAttribute('src', 'images/TheGreatGatsby.jpg');
            break;
    };
    bookimg.style.width = '300px';
    unorderedList.appendChild(bookimg);
}