var books = [{
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



document.body.style.fontFamily = 'Arial, sans-serif';




const myName = document.querySelector('#nickname');
myName.innerHTML = "Abdulrhman Aljammaz.";

const myAni = document.querySelector('#favorite');
myAni.innerHTML = "Squirrel";

const myTown = document.querySelector('#hometown');
myTown.innerText = "Riyadh";


const addClass = document.querySelector("li");
addClass.setAttribute("class", "listItem");
addClass.setAttribute("class", "listItem");
addClass.setAttribute("class", "listItem");