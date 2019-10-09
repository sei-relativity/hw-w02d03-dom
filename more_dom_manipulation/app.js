// Change the font-family of the page to "Arial, sans-serif"
const body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";

// Replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
const nickname = document.querySelector("span#nickname");
const favorite = document.querySelector("span#favorite");
const hometown = document.querySelector("span#hometown");
nickname.innerText = "Moayad Alnuwaisir";
favorite.innerText = "Kangaroo";
hometown.innerText = "Unayzah";

// Give each li the class of "listitem"
// Change each li's text color to "rebeccapurple"
const listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
    const currentListItem = listItems[i];
    currentListItem.setAttribute("class", "listitem");
    currentListItem.style.color = "rebeccapurple";
}

// Create a new img element and set its src attribute to a picture of you. Put that new img element in the div with the class of "profilePicture"
const image = document.createElement("img");
const profilePictureDiv = document.querySelector("div.profilePicture");
image.setAttribute("src", "quick_design.jpg");
profilePictureDiv.appendChild(image);
image.style.width = "150px";

// The Book List
const books = [{
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

// Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks
const heading1 = document.createElement("h1");
const favoriteBooksDiv = document.querySelector("div.favoriteBooks");
heading1.innerText = "My Book List";
favoriteBooksDiv.appendChild(heading1);

// Iterate through the array of books. For each book, create a p tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page
for (let i = 0; i < books.length; i++) {
    const currentParagraph = document.createElement('p');
    currentParagraph.innerText = books[i].title + ", by " + books[i].author;
    favoriteBooksDiv.appendChild(currentParagraph);
}