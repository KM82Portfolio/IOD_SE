const rawdata = require('./book.json');

let book = JSON.parse(rawdata);

console.log(book.author);