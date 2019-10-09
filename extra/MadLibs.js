
// - Create a new JavaScript file, and link it to the page with a script tag at the bottom
// - Create a function called `makeMadLib`

//   - Retrieve the current values of the inputs on the page
//   - Combine them to make a story (e.g. `"NAME really likes ADJECTIVE NOUN"`)
//   - Once you have created the story, set `div#story`'s text to be that story

// ## Basic Analytics

// On the same page, add some basic analytics

// - Whenever the user moves the mouse, log out the current `X` and `Y` coordinates of the mouse

// ### Analytics Bonus!

// Create a `div` that is 10px wide and 10px high. Set the background color to `"rebeccapurple"`.

// Using the mouse `X` and `Y` coordinates from before and the `position` CSS property, get the `div` that you just created to follow the mouse

$("document").ready(function(){

const name = $('#person');
const adjective = $('#adjective');
const noun = $('#noun');
const story = $('#story')
const button = $('button')
const makeMadLib = function(){
story.append('<p>'+name.val()+' really likes '+adjective.val()+' '+noun.val() +'</p>')
}
$( "body" ).append( "<div><p class='mouse'></p></div>" );
$( "body" ).append( "<div class='followMouse'></div>" );
const div =$('.followMouse')
div.css({width: '10px',
height:'10px',
backgroundColor: 'rebeccapurple'})
$(document).mousemove(function( event ) {
  var mouseCor = "mouse at "+ event.pageX +' , '+event.pageY;
  $('.mouse').text(mouseCor)
  div.css({
    position: 'absolute',
    top: event.pageY,
    left: event.pageX
  })
});

button.click(makeMadLib)
})