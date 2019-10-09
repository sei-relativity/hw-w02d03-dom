//Change the font-family of the page to "Arial, sans-serif"
const changeFont = document.querySelector("body");
changeFont.style.fontFamily = "Arial, sans-serif";

//replace span tage with info
const nickname = document.querySelector("span#nickname");
const favorite = document.querySelector("span#favorite");
const hometown = document.querySelector("span#hometown");

nickname.innerText = "Saud Alshamsi";
favorite.innerText = "Cat";
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