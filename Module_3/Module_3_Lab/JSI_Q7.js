const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
];
// Q7a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
function getBookTitle(bookId){
    let bookToFind = books.find(tf=>tf.id==bookId)
    return bookToFind.title
}

console.log(getBookTitle(1))

// // Q7b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
function getOldBooks(){
    let bookToFind = books.find(tf=>tf.year<1950)
    return bookToFind.title
}

console.log(getOldBooks())

// Q7c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.
function addGenre(){
    let newBookArray = books.map(bk=>({...bk,genre:'classic'}))
    return newBookArray
}
let newBookArray = addGenre()
console.log(newBookArray)

// Q7d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by 
// authors whose names start with authorInitial.
function getTitles(authorInitial,books){ //added books as argument to make function usable on other arrays of objects
    return books.filter((b)=>b.author.startsWith(authorInitial)).map((b)=>b.title);
}
console.log(getTitles('F.',books))

// Q7e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.
