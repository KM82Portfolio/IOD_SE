const book = {
    "title":"Bad jokes",
    "description":"Book of really bad jokes",
    "author":"Who else?",
    "totalpages":1
};

console.log("Book Title : ",book.title);
console.log("Book Description : ",book.description);
console.log("Book Author : ",book.author);
console.log("Book Total Number of Pages : ",book.totalpages);

book.description = "The jokes could get worse.";

console.log("New Book Description : ",book.description);

const rawdata = '{"title":"Bad jokes","description":"Book of really bad jokes", "author":"Who else?","totalpages":1}';
let book1 = JSON.parse(rawdata);
console.log("Parsed JSON title : ",book1.title);