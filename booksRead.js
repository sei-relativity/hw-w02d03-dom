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

  //creating h1
let header = document.createElement('h1');

let divBook = document.querySelector('.books');
//creating elements
divBook.appendChild(header);
header.innerHTML='Book List';

let unorderedList = document.createElement('ul')
divBook.appendChild(unorderedList)

//for loop to enter each cell
for (let i=0; i<books.length; i++){

  let bookNameAndAuthor = document.createElement('p')
  bookNameAndAuthor.innerHTML=books[i].title+' , '+books[i].author



  const list = document.createElement('li')
  const bookCover = document.createElement('img')
  bookCover.setAttribute('src', 'pic1.jpg')

  unorderedList.appendChild(list).appendChild(bookNameAndAuthor)
  unorderedList.appendChild(list).appendChild(bookCover)

  if (books[i].alreadyRead ===true){
    bookNameAndAuthor.style.color='yellow'
  }else{
    bookNameAndAuthor.style.color='green'

  }


}) 