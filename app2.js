


// change the font 
const newFont=document.querySelector('body'); 
newFont.style.fontFamily='Arial, sans-serif' ; 

//replace the span 
const nickName=document.querySelector('#nickname') ; 
nickName.innerHTML="Sara" ;

const favorite=document.querySelector('#favorite') ; 
favorite.innerHTML="Cat" ;

const hometown=document.querySelector('#hometown') ; 
hometown.innerHTML="Riyadh" ;

const all=document.querySelectorAll('li');

for(let i=0;i<all.length;i++) {
    const current=all[i]; 
    current.className="listitem" ; 
current.style.color="rebeccapurple" ;    
}

const profile=document.querySelector('.profilePicture') ; 
const newimg =document.createElement('img') ; 
newimg.setAttribute("src","https://totalproductmarketing.com/wp-content/uploads/2019/03/lori-aizer-profile.png") ; 
newimg.style.width='200px' ; 
newimg.style.length='200px' ; 
profile.appendChild(newimg) ;

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



const bookdiv=document.querySelector('.favoriteBooks') ; 
const newhead =document.createElement('h1') ; 
newhead.innerHTML="My Book List" ;  
bookdiv.appendChild(newhead) ;



for(let j=0;j<books.length;j++) {
    const currentBook=books.title[j]; 
  const Parbook = document.createElement=('p') ; 
  Parbook.innerHTML=currentBook ;  
  document.body.appendChild(Parbook) ; 
  console.log(books.title[j]+" By "+ books.author[j])   ; 
}































