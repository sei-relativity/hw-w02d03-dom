

const changeR =  function() {
    let x = document.createElement("IMG");
    const h = document.querySelector('#inputHight').value;
    const w = document.querySelector('#inputWidth').value;

    x.setAttribute("src", `https://source.unsplash.com/collection/190727/${w}x${h}`);
    
    x.setAttribute("alt", "random image");
    document.body.appendChild(x);
  }
 ;

  document.querySelector('button').addEventListener('click', changeR);//click two time 

//   document.querySelector('input').addEventListener('input', innerWidth);