



document.body.style.fontFamily = "Arial, sans-serif";

document.querySelector("#nickname").innerHTML = "Obaid Alqahtani";
document.querySelector("#favorite").innerHTML = "Cyber";
document.querySelector('#hometown').innerHTML = "Al-rain"
const liArr = document.querySelectorAll('li');
for (let i = 0; i < liArr.length; i++) {

    liArr[i].className = 'listitem';
    liArr[i].style.color = "rebeccapurple";
}
const newImg = document.createElement('img');
newImg.setAttribute("src", "http://2.bp.blogspot.com/-QJw5M-81u3E/Ts2-7UWNu_I/AAAAAAABuhA/rzVspDG1Hc4/s1600/funny%2Bhorse%2Bpictures%2Bfree%2B%252848%2529.jpg")

const div = document.querySelector(".profilePicture");

div.append(newImg);


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

//   const newHeader = document.createElement('h1');
//   newHeader.innerText ="My Book List";
// const divBook = document.querySelector(".favoriteBooks");
// divBook.append(newHeader);


const divBook = document.createElement('h1');
divBook.innerText = "My Book List";

const favBooks = document.querySelector('div.favoriteBooks')
favBooks.appendChild(divBook)




const ulBooks = document.createElement('ul');
for (const bookLists of books) {
    const pTag = document.createElement('p');
    const listTag = document.createElement('li');
    pTag.innerText = `${bookLists.title}, by ${bookLists.author}`;

    pTag.innerText = ""

    if (bookLists.alreadyRead) {
        pTag.style.color = 'red'
    }


    listTag.append(pTag);
    ulBooks.append(listTag);
}

favBooks.append(ulBooks);
