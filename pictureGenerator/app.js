document.querySelector(".image").innerHTML = `<img src="https://source.unsplash.com/1600x900">`
let image = 'https://source.unsplash.com/1600x900'
const setimg = function(){
    image+= '?'+Date()
    console.log(image)
    document.querySelector('img').setAttribute('src', image)

}
document.getElementById('randomize').onclick = setimg;