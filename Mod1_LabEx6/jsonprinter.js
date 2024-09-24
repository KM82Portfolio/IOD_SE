//const rawdata = require("./book.json");
import data from './data.json' assert { type: 'json' };
//import rawdata from "./book.json"
let book = JSON.parse(rawdata);

console.log(book.author);