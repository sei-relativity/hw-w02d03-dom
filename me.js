
const page = document.querySelector('body');
page.style.fontFamily = "Arial, sans-serif" ;

const firstName = document.getElementById('nickname');
firstName.innerHTML = "Lama";

const favourite = document.getElementById('favorite');
favourite.innerHTML = "Parrot";

const town = document.getElementById('hometown');
town.innerHTML = "Riyadh";


document.getElementsByTagName('li').className = "listitem";

const list = document.querySelector('ul');
list.style.color='rebeccapurple';

const newImg = document.createElement('img');
newImg.setAttribute('src', 'https://www.fillmurray.com/400/400' ); 

document.body.appendChild(newImg);

newImg.className ='profilePicture';

// BOOKS

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

  const favBooks = document.createElement('h1');
  favBooks.innerText = 'My Book List';
  document.body.appendChild(favBooks); 
  
  for(let i =0 ; i < books.length; i++){
  const eachBook = document.createElement('p');
  eachBook.innerText = books.title[i] + ' by ' + books.author[i];
  document.body.appendChild(eachBook); 
  }





