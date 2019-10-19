//Chaning fonts:
document.querySelector("body").style.fontFamily="Arial, sans-serif";
//Changing attributes:
let nickname = document.querySelector("#nickname");
let favorite = document.querySelector("#favorite");
let hometown = document.querySelector("#hometown");

//replacing each span with my information
nickname.innerText = "Cha";
favorite.innerText = "Dogs";
hometown.innerText = "Madina";

//selecting all li
let list = document.querySelectorAll("li");

//for loop to change all li
for (let i=0; i<document.querySelectorAll("li"); i++){
    let element= list[i];
    element.setAttribute("class", "listItem");
    element.style.color= "rebeccapurple";
}


//setting profile picture

let profileDiv = document.querySelector(".profilePicture");
let profileImg = document.createElement("img");
//setting attribute for the picture
profileImg.setAttribute("src", "pic1.jpg" );
profileDiv.appendChild(profileImg);

profileImg.style.maxWidth="200px";