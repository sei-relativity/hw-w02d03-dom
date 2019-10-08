// - Create and link a JavaScript file
// - When someone clicks `button#randomize`:
//   - Create an `img` element
//   - Create a URL based on [this documentation](https://source.unsplash.com/)
//     - e.g. It might look something like this: `https://source.unsplash.com/1600x900`

// ### Bonus 1

// Allow the user to select the width and the height!

// ### Bonus 2

// Allow the user to select where their image comes from using a dropdown

// Suggested options:

// - [Picsum](https://picsum.photos/200/300?random=1)
// - [Lorem Flickr](https://loremflickr.com/320/240)

const button = document.querySelector('button');
const imageContainer = document.querySelector('.image');
const randomImage = document.createElement('img');
imageContainer.appendChild(randomImage);

button.addEventListener('click', function () {
  const width = document.querySelector('.width').value;
  const height = document.querySelector('.height').value;
  const website = document.querySelector("#choose");
  const websiteURL = website.options[website.selectedIndex];
  
  if (width === '' && height === '') {
    if (websiteURL.text === 'unsplash') {

      randomImage.setAttribute('src', websiteURL.value+'random/?'+Math.ceil((Math.random()*1000)))
    } else {
      randomImage.setAttribute('src', websiteURL.value + '200/200')
    }
  }
  else {
    if (websiteURL.text === 'unsplash') {
      randomImage.setAttribute('src', websiteURL.value + width + 'x' + height)
    }else{
      randomImage.setAttribute('src', websiteURL.value + width + '/' + height)

    }
  }

})

console.log('hi')