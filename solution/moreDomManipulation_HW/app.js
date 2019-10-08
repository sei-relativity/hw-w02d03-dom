



document.body.style.fontFamily="Arial, sans-serif";

document.querySelector("#nickname").innerHTML = "Obaid Alqahtani";
document.querySelector("#favorite").innerHTML="Cyber";
document.querySelector('#hometown').innerHTML="Al-rain"
const liArr=document.querySelectorAll('li');
    for(let i=0;i<liArr.length ;i++){
        
        liArr[i].className ='listitem';
        liArr[i].style.color="rebeccapurple";
    }