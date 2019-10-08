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
document.querySelector('body').style.fontFamily = "Aerial, sans-serif"; 
document.getElementById('nickname').innerText = "Muhannad"
document.getElementById('favorite').innerText = "Cat"
document.getElementById('hometown').innerText = "Ar'ar"
const li = document.querySelectorAll('li')
for(let i = 0; i<li.length; i++){
    li[i].setAttribute('class', 'listItems')
    li[i].style.color = "rebeccapurple"
}
document.querySelector('.profilePicture').innerHTML = "<img>"
document.querySelector('div img').setAttribute('src', 'https://www.placecage.com/400/400')
document.querySelector('.favoriteBooks').innerHTML = "<h1>My Book List</h1>"
console.log(books.length)
for(let i = 0; i<books.length; i++){
    document.querySelector('.favoriteBooks').innerHTML += "<p>"+books[i].title+", by "+books[i].author+"</p>"
}