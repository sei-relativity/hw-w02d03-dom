document.body.style.fontFamily="Arial, sans-serif";

document.querySelectorAll("li")[0].innerText += " Chandler Bing ";
document.querySelectorAll("li")[1].innerText += " Duck & chiken";
document.querySelectorAll("li")[2].innerText += " Central perk ";

const allItems = document.querySelectorAll('li');
for(let i = 0; i < allItems.length; i ++){
allItems[i].className = ".listitem";
}

const lis = document.querySelector("ul");
lis.style.color= "rebeccapurple";

const myImg = document.createElement('img');
myImg.setAttribute('src' , "images/me.jpg");
document.querySelector('.profilePicture').appendChild(myImg);
document.querySelector('img').style.width = "400px";

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

  const myBookList = document.createElement('h1');

  myBookList.innerText = "My Favorite Books : ";
  const bookDivs = document.querySelector(".favoriteBooks");
  bookDivs.appendChild(myBookList);

 // const list = document.querySelector(books);
  for (let i = 0; i < books.length; i++){
      const book = document.createElement('p');
        book.innerText= books[i].title +" by "+books[i].author;
        bookDivs.appendChild(book);
        }
