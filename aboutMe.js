//Change the font-family of the page to "Arial, sans-serif"
const changeFont = document.querySelector("body");
changeFont.style.fontFamily = "Arial, sans-serif";

//replace span tage with info
const nickname = document.querySelector("span#nickname");
const favorite = document.querySelector("span#favorite");
const hometown = document.querySelector("span#hometown");

nickname.innerText = "Saud Alshamsi";
favorite.innerText = "Dog";
hometown.innerText = "Dammam";

const list = document.querySelectorAll("li");

for (let i = 0; i < list.length; i++) {
    const element = list[i];
    element.setAttribute("class", "listitem");
    element.style.color = "rebeccapurple";
}

//adding profile pic

const profileDiv = document.querySelector(".profilePicture");
const profileImage = document.createElement("img");

profileImage.setAttribute("src", "myPic.jpeg");

profileDiv.appendChild(profileImage);
profileImage.style.maxWidth = "200px";

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
const favoriteBookDiv = document.querySelector(".favoriteBooks");
const favoriteBookDivHeading = document.createElement("h1");

favoriteBookDivHeading.innerText = "My book list";

favoriteBookDiv.appendChild(favoriteBookDivHeading);

for (let i = 0; i < books.length; i++) {
    const p = document.createElement("p");
    const element = books[i].title + " by " + books[i].author;
    p.innerText = element;
    favoriteBookDiv.appendChild(p);
}

