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

// book list
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

const bookTarget = document.querySelector('.favoriteBooks');
const myBookList = document.createElement('h1');
myBookList.innerText = 'My Book List'
bookTarget.appendChild(myBookList);

  for (let i = 0; i < books.length; i++) {
      let newBookElement = document.createElement('p')
      newBookElement.innerText = books[i].title +' by ' + books[i].author;
      bookTarget.appendChild(newBookElement);
  }