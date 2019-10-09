const img = document.querySelector("img");

img.style.position = "absolute";
img.style.left = "0px";
const catWalktoRight = function() {
  img.style.left = "0px";
  const timer1 = setInterval(() => {
    const endLeft = window.innerWidth - 296;
    let oldLeft = img.style.left;
    let oldLeftArr = oldLeft.split("px");
    let oldLeftStr = oldLeftArr[0];
    let oldLeftNum = Number(oldLeftStr) + 10;
    let newLeft = `${oldLeftNum}px`;
    img.style.left = newLeft;
    console.log(newLeft, endLeft);
    if (oldLeftNum > endLeft) {
      catWalktoLeft(newLeft);
      clearInterval(timer1);
    }
  }, 500);
};
catWalktoRight();

const catWalktoLeft = function(a) {
  console.log("===============", a);
  let oldLeft = a;
  const endLeft = 0;
  const timer2 = setInterval(() => {
    let oldLeftArr = oldLeft.split("px");
    console.log("====================================");
    console.log(oldLeftArr);
    console.log("====================================");
    let oldLeftStr = oldLeftArr[0];
    let oldLeftNum = Number(oldLeftStr) - 10;
    let newLeft = `${oldLeftNum}px`;
    img.style.left = newLeft;
    oldLeft = newLeft;
    console.log("heeenaaaa", oldLeftNum, endLeft);
    if (oldLeftNum < endLeft) {
      catWalktoRight();
      clearInterval(timer2);
    }
  }, 500);
};
