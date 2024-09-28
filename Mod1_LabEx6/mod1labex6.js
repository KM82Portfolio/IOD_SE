let book = require("./book.json");
console.log(book);
//let book = JSON.parse(rd);

console.log("Book Title : ",book.title);
console.log("Book Description : ",book.description);
console.log("Book Author : ",book.author);
console.log("Book Total Number of Pages : ",book.totalpages);

//function to rewrite obj properties
function reWriter(obj_prop,replacement_text){
    book[obj_prop] = replacement_text; //within
}

reWriter("description","The jokes could get worse.");//call function
console.log("New Book Description : ",book.description);//print output to log

//objection property access test
console.log("This book has ",book.Chapters.length," chapters");
console.log("The title of the 4th Chapter is",book.Chapters[3]);

//JSON parse test
//const rawdata = '{"title":"Bad jokes","description":"Book of really bad jokes", "author":"Who else?","totalpages":1}';
//let book1 = JSON.parse(rawdata);
//console.log("Parsed JSON title : ",book1.title);




//function to rewrite obj properties
function reWriter1(obj,obj_prop,replacement_text){
    obj[obj_prop] = replacement_text; //within
}

reWriter1("book","title","New Title");
console.log("Pass object test",book.title);