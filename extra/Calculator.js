// - Create a new JavaScript file, link it by adding a script tag at the bottom of the body tag
// - For each operation, create an event listener for the button, and whenever it is clicked:

//   - Find the value of the appropriate inputs
//   - Show the result of the calculation in `div#solution`

// - Bonus: respond to key presses so that the user doesn't have to click the button.
$("document").ready(function(){

const half = $('#half-input')
const fraction = $('#percent1-input')
const whole = $('#percent2-input')
const circle = $('#area-input')
const sol = $('#solution').append('<p></p>')


const halfnumber = function(){
sol.text(half.val()/2);
}

const frawhole = function(){
  sol.text(fraction.val()*whole.val())
}

const area = function(){
  sol.text(Math.PI*Math.pow(circle.val(),2))
}


half.keyup(halfnumber);
whole.keyup(frawhole)
circle.keyup(area)


})


// let u = document.querySelector('#half-input').value;
// console.log(u);
