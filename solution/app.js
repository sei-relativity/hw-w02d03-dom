const button = document.querySelector("#randomize");
console.log(button);

function one() {
  const height = document.querySelector(".height").value;
  const width = document.querySelector(".width").value;
  console.log(height, width);
  console.log("im here");
  let newSrc = `https://source.unsplash.com/${height}x${width}`;
  let img = document.querySelector("div.image");
  img.style["background-image"] = `url('${newSrc}')`;
  img.style["width"] = `${width}px`;
  img.style.height = `${height}px`;
  img.style.margin = "30px";
}

const createImg = () => {
  const height = document.querySelector(".height").value;
  const width = document.querySelector(".width").value;
  console.log(height, width);
  console.log("im here");
  const selection = document.querySelector("#websites").value;
  let newSrc;

  switch (selection) {
    case "unsplash":
      newSrc = `https://source.unsplash.com/${height}x${width}`;
      break;
    case "Picsum":
      newSrc = `https://picsum.photos/${height}/${width}`;
      break;
    case "Fill Murray":
      newSrc = `https://www.fillmurray.com/${height}/${width}`;
      break;
    case "Place Cage":
      newSrc = `http://www.placecage.com/${height}/${width}`;
      break;
    case "Lorem Flickr":
      newSrc = `https://loremflickr.com/${height}/${width}`;
      break;
    default:
      break;
  }

  let img = document.createElement("img");
  img.src = newSrc;
  img.style.margin = "40px";
  document.querySelector(".image").appendChild(img);
};
