$(document).ready(function () {
    const $body = $("body");
    $body.css("font-family", "Arial, sans-serif");
    $("#nickname").append("Dragon Slayer");
    $("#favorite").append("The Great Gatsby");
    $("#hometown").append("Riyadh");
    
    $("li").addClass("listitem");
});
const books = [
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

