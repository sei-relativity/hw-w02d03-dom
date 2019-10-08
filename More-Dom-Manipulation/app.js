//About Me
document.body.style.fontFamily= "Arial, sans-serif";

const span= document.querySelectorAll("span");
const valuesSpan= ["Mero.", "Horse.", "Riyadh."];
for(let i=0 ; i<span.length ; i++){
    span[i].innerHTML= valuesSpan[i];}


const listItems = document.querySelectorAll("li");
for(let i = 0; i < listItems.length; i++){
    listItems[i].setAttribute("class","listItem");
    listItems[i].style.color = ('rebeccapurple');}


const newImage= document.createElement("img");
const url = "https://localtvwtvr.files.wordpress.com/2019/07/gettyimages-138425601.jpg?quality=85&strip=all&w=800&h=450&crop=1";
const target = document.querySelector("div.profilePicture");
newImage.setAttribute("src", url);
target.appendChild(newImage);

// The Book List
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

const myBookList = document.createElement("h1");
myBookList.innerText = "My Book List:";
  
const favBooks = document.querySelector("div.favoriteBooks");
favBooks.appendChild(myBookList);

for (let i=0 ; i<books.length ; i++){
    let bookElement = document.createElement("p");
    bookElement.innerText = '"' + books[i].title +", by " + books[i].author + '"';
    favBooks.appendChild(bookElement);}