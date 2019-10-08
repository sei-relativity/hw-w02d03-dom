// - Create a JavaScript file, and link it up
// - Using JavaScript:

//   -* Change the font-family of the page to `"Arial, sans-serif"`
//   -* Replace each of the `span` tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
//   -* Give each `li` the class of `"listitem"`
//   -* Change each `li`'s text color to `"rebeccapurple"`
//   -* Create a new `img` element and set its `src` attribute to a picture of you.
//     Put that new `img` element in the div with the class of `"profilePicture"`

document.querySelector('body').style.fontFamily='Arial, sans-serif';

const span = document.querySelectorAll('span');
span[0].innerHTML='Mees';
span[1].innerHTML='Turtle';
span[2].innerHTML='Wonder Land';

const list = document.querySelectorAll('li');

list.forEach(e=>{
  e.setAttribute('class', 'listitem')
})

const listClass = document.querySelectorAll('.listitem')
console.log(listClass)
listClass.forEach(e=>{
  e.style.color='rebeccapurple'
})

const image = document.createElement('img')
const divPic = document.querySelector('.profilePicture')
divPic.appendChild(image);

image.setAttribute('src', './me.jpeg')
image.style.width='200px';
image.style.height='200px'


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


// - In your JavaScript file:
//   -* Create an `h1` with the text of "My Book List", 
//and put it inside `div.favoriteBooks`
//   - Iterate through the array of books. For each book,
// create a `p` tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page

// ### Bonus

// -* Turn the books into an unordered list filled with list items
// -* Add a property to each book with a URL of the book cover image.
// For each book, add an `img` element for each book on the page
// -* Change the style of the book depending on whether you have read it
// or not (e.g. make the text color red if you have read it)

books.forEach(e=>{
  e.URL = ' hi';
})

const heading = document.createElement('h1')
const divBook = document.querySelector('.favoriteBooks')
divBook.appendChild(heading);
heading.innerHTML='My Book List';
const unordered = document.createElement('ul')
divBook.appendChild(unordered)

books.forEach(e=>{
  const bookTitleAndAuthor = document.createElement('p')
  bookTitleAndAuthor.innerHTML=e.title+' , '+e.author
  const list = document.createElement('li')
  const bookCover = document.createElement('img')
  bookCover.setAttribute('src', './me.jpeg')
  bookCover.style.width='200px';
  bookCover.style.height='250px'
  unordered.appendChild(list).appendChild(bookTitleAndAuthor)
  unordered.appendChild(list).appendChild(bookCover)

  if (e.alreadyRead ===true){
    bookTitleAndAuthor.style.color='red'
  }else{
    bookTitleAndAuthor.style.color='green'

  }


}) 
