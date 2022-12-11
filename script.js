let myLibrary = [

];

let list = document.querySelector('#list');
let div1 = document.querySelector('#hp');

let readBtn = document.querySelector('#rmv');

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}


// function addBook(){

// }