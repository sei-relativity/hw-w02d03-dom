// - Create a new JavaScript file and link to it with a script tag at the bottom
// - Create a variable to store a reference to the img
// - Change the style of the `img`
//   - Set `position` to `absolute`
//   - Set `left` to `0px`
// - Create a function called `catWalk()` that moves the cat 10 pixels to the right of where it started, by changing the `left` style property
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// ## Bonuses

// ### Bonus 1

// When the cat reaches the right-hand side of the screen, move the cat back to the left-hand side ("0px"). So that cat should keep walking from left to right across the screen, forever and ever.

// ### Bonus 2

// When the cat reaches the right-hand of the screen, make them move backwards towards the left instead (try flipping the cat around with CSS, too). The cat should keep walking back and forth forever and ever.

// ### Bonus 3

// When the cat reaches the middle of the screen, replace the img with an image of a cat dancing. Keep it dancing for 10 seconds, and then replace the img with the original image and have it continue to walk.

// ### Bonus 4

// Go crazy! Do whatever you want. Add music, more images, animations - whatever you'd like!

// ## Some Inspiration

// - [Example 1](http://reenarajani.github.io/myGitPages/CatProgram/)
// - [Example 2](http://harrisdm.github.io/Dancing_Cat/)
// - [Example 3](http://rodneyss.github.io/walkcat/)
// - [Example 4](http://charliegerard.github.io/dancingcats/)

$('document').ready(function(){

const music = $('audio')[0].id
console.log(music)
$('body').css('max-width','1000px')
const cat = $('img');
cat.css({
  position: 'absolute',
    left: '0px',
})
let F,B;
const currentCat = cat.attr('src');


const catWalkF = function(){
  cat.css({left:'+=10px',
  transform: 'scaleX(-1)'})
  console.log('F');
  if(cat[0].style.left==='490px'){
   cat.css('left','500px' )
    dancingcat(); 
    clearInterval(F)
    setTimeout(()=>{
  cat.attr('src', currentCat)
  cat.css('left','+=10px' )
  F =setInterval(catWalkF,50)
  document.querySelector('audio').pause()
},5000)}

  if(cat[0].style.left === '990px'){
      B = setInterval(catWalkB,50)}
  
}

const dancingcat =function () {
  cat.attr('src','https://2.bp.blogspot.com/-llDPNKH0sOI/WYxT4n698kI/AAAAAAABND4/wM1-MbNUyOcFNa9p5CGwTrIBhy15tABYQCLcBGAs/s1600/AW497924_12.gif')
  document.querySelector('audio').play().catch(function() {
    // do something
});
  console.log(currentCat)}
   

const catWalkB = function(){
  clearInterval(F);
  console.log('B');
  cat.css({left:'-=10px',
  transform: 'scaleX(1)'})

  if(cat[0].style.left==='490px'){
    cat.css('left','500px' )
     dancingcat(); 
     clearInterval(B)
     setTimeout(()=>{
   cat.attr('src', currentCat)
   cat.css('left','-=10px' )
   B =setInterval(catWalkB,50)
  document.querySelector('audio').pause()
 },5000)}
  
  if(cat[0].style.left === '0px'){
    F =setInterval(catWalkF,50)
    clearInterval(B)
      }
  }


  F =setInterval(catWalkF,50)
})