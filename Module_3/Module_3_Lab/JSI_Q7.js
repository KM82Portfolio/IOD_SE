const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
];
// Q7a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
// function getBookTitle(bookId){
//     let bookToFind = books.find(tf=>tf.id==bookId)
//     return bookToFind.title
// }

// console.log(getBookTitle(1))

// // Q7b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
// function getOldBooks(){
//     let bookToFind = books.find(tf=>tf.year<1950)
//     return bookToFind.title
// }

// console.log(getOldBooks())

// // Q7c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.
// function addGenre(){
//     let newBookArray = books.map(bk=>({...bk,genre:'classic'}))
//     return newBookArray
// }
// let newBookArray = addGenre()
// console.log(newBookArray)
// function getTitles(authorInitial){

function extractInitials(stringtoExtractFrom){
    [s1,s2] = stringtoExtractFrom.split(' ');
    s1=s1.charAt(0);
    s2=s2.charAt(0);
    return [s1,s2].join('');
}

function getTitles(){
    // extract author initials 1st into array
    let renamedAuthors = books.map((bk)=>extractInitials(bk.author))
    console.log(renamedAuthors)
    // let newBookArray = books.filter((authorInitial)=>({...bk,genre:'classic'}))
}
getTitles()