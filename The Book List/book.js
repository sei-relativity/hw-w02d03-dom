let books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true
    }
  ];


  let bookH =  function() {
    let d = document.createElement('div.favoriteBooks');
    let h = document.createElement("H1");
    let t = document.createTextNode("My Book List");
    d.appendChild(h);
    h.appendChild(t);
    document.body.appendChild(d);
  }
  bookH();
  let result = 0;
  let bookp =  function() {
      for(let i=0; i < books.length; i++ ){
        var para = document.createElement("P");
        para.innerHTML = " " + books[i].title + " " + books[i].author;
    
        document.body.appendChild(para);
        console.log(para);
    }
    
  }
  bookp();

  