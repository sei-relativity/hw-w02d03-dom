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

const newList = document.querySelector('.listitem');
newList.style.color = 'rebeccapurple';
newList.fontFamily = 'Arial, sans-serif';

  const BTarget = document.querySelector('.favoriteBooks');

  const myBookList = document.createElement('h1');
  myBookList.innerText= "My Book List";

  for (let i = 0; i < books.length; i++) 
  {
    let newBookElement = document.createElement('p')
    newBookElement.innerText = books[i].title +' by ' + books[i].author;
    BTarget.appendChild(newBookElement);
}  