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

document.body.style.fontFamily= "Arial, sans-serif";

document.getElementById('nickname').innerHTML = "NAWAL";
document.getElementById('favorite').innerText = "Cat";
document.getElementById('hometown').innerText = "riyadh";
const listItems = document.querySelectorAll("li");

for(let i = 0; i < listItems.length; i++){
    listItems[i].setAttribute("class","listItem");
    listItems[i].style.color = ('rebeccapurple')

}


const mImg = document.createElement('img');
mImg.setAttribute('src', 'https://source.unsplash.com/1600x900' ); 
document.body.appendChild(mImg);
mImg.className ='profilePicture';

const myBookList = document.createElement("h1");
myBookList.innerText = "My Books:";

const fBooks = document.querySelector(".favoriteBooks");
fBooks.appendChild(myBookList);

for (let i=0 ; i<books.length ; i++){
    const  boook = document.createElement("p");
    
    boook .innerText =  books[i].title +" by " + books[i].author;
    fBooks.appendChild( boook);
}