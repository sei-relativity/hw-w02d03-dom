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
const url =[
  'https://cdn11.bigcommerce.com/s-5r4ioz00xs/images/stencil/1000x1000/products/126/439/The-Design-of-Everyday-Things__31494.1551347724.jpg?c=2',
  'data:image/jpeg;base64,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',
  'https://images-na.ssl-images-amazon.com/images/I/51tRkYYlpaL.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/51wTLf4JVwL._SX384_BO1,204,203,200_.jpg',
  'https://images-eu.ssl-images-amazon.com/images/I/513XpOgZtiL.jpg'
]

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
let i =0;
books.forEach(e=>{
  
  e.URL = url[i];
  i++
})
console.log(url)

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
  bookCover.setAttribute('src', e.URL)
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
