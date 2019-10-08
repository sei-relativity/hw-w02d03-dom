// Change the font-family of the page to "Arial, sans-serif"

document.body.style.fontFamily = "Arial, sans-serif";

// eplace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
document.querySelector("#nickname").textContent = "AMS";

const Lis = document.querySelectorAll("li");
console.log(Lis);

for (let i = 0; i < Lis.length; i++) {
  const currentLi = Lis[i];
  currentLi.setAttribute("class", "listitem");
  currentLi.style.color = "rebeccapurple";
}

// Change each li's text color to "rebeccapurple"

const img = document.createElement("img");
img.src =
  "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";

document.querySelector(".profilePicture").appendChild(img);

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

const h1 = document.createElement("h1");
h1.innerText = "My Book List";

document.querySelector("div.favoriteBooks").appendChild(h1);

for (let i = 0; i < books.length; i++) {
  const element = books[i];
  const p = document.createElement("p");
  p.innerText = `${element.title}, ${element.author}`;
  document.querySelector("div.favoriteBooks").appendChild(p);
}
