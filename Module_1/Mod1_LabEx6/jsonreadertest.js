let booklist = require("./book1.json");
console.log(booklist);

function reWriter2(objname, obj_prop,replacement_text){
    booklist[objname][obj_prop] = replacement_text; //within
}

reWriter2("book1","title","Newer Title");
console.log(booklist.book1.title);