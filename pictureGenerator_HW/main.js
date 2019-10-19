// - Create and link a JavaScript file
// - When someone clicks `button#randomize`:
//   - Create an `img` element
//   - Create a URL based on [this documentation](https://source.unsplash.com/)
//     - e.g. It might look something like this: `https://source.unsplash.com/1600x900`

const btn = document.querySelector("button");
const imageDiv = document.querySelector(".image");
const img = document.createElement("img");
//sets the generated random picture of the user

const eventType= 'click';
imageDiv.appendChild(img);
console.log(btn);

const randomizeImg = function(){
    img.setAttribute("src", "https://source.unsplash.com/random/");
}

btn.addEventListener("click", randomizeImg); 