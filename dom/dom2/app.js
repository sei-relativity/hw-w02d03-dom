const page =document.querySelector('body');
page.style.fontFamily="Arial, sans-serif";


document.querySelector('#nickname').innerHTML="Dalia";
document.querySelector('#favorite').innerHTML="birds";
document.querySelector('#hometown').innerHTML="Khamis-MUshit";

const listItem =document.querySelectorAll('li');
for (let i=0;i<listItem.length;i++){
    listItem[i].className='listitem';
    listItem[i].style.color='rebeccapurple';
    console.log(listItem[i]);
}


const image = document.createElement('img');
image.setAttribute('src','https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260s');
const imgDiv=document.querySelector('.profilePicture');
imgDiv.appendChild(image);




let books = [
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


  const heading =document.createElement('h1');

  heading.innerText += 'MY Book List';

  const divpage = document.querySelector('.favoriteBooks');
  divpage.appendChild(heading);


let listItems = document.createElement('p');
  for( let i=0 ; i<books.length;i++){
    //   listItems.innerHTML += '<p>${books[i].title} , By ${books[i].author}</p>'; // i spend all time to fix this sentence ya rabbbbi
    listItems.innerHTML += "<p>" +books[i].title+ " , By " +books[i].author + "</p>";
      divpage.appendChild(listItems);
  }