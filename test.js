// // extract value of a specific key from an array of objects with that key
// function extractValue(arr, prop) {
//     let extractedValue = arr.map(item => item[prop]);
//     return extractedValue;
// }

// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// // passing an array of objects and property 'a' to extract
// const result = extractValue(objArray, 'a');
// console.log(result);

// function changeCurrency(delay,limit){

//     let c = 0

//     let intervalTimer = setInterval(()=>{
//             if(c==0) {
//                 $('#test_area11').html('Extracting Currency;');
//             }
//             if(c==limit){ 
//                 $('#test_area11').html('');
//                 clearInterval(intervalTimer);
//             }
//             c++;
//         },
//         delay
//     );
// }
// changeCurrency(200,5);


const todos = [
    { id: 1, title: "Complete homework", description: "Finish math and science assignments", completed: false }, 
    { id: 2, title: "Grocery shopping", description: "Buy vegetables, fruits, and milk", completed: false }, 
    { id: 3, title: "Workout", description: "Go for a 30-minute run", completed: true }, 
    { id: 4, title: "Read a book", description: "Read at least one chapter of 'Atomic Habits'", completed: false }, 
    { id: 5, title: "Organize desk", description: "Clear and organize desk for better productivity", completed: true }
];

todos.forEach((todo, index) => {
    console.log(`${index + 1}.${todo.title}`)
})

// //set all completed properties to true
// todos.forEach((t,i)=>{
//     t.completed=true;
// })
// console.log(todos)

// let newTodods = todos.map(t => {
//     return t.title
// })
// console.log(newTodods)

//using map to change each obj property values, but we want the whole original array of objects back
let todoMap = todos.map((t)=>{
    return {...t,completed:true};//changes 1 object's completed property per map() iteration
})
console.log('New todo ',todoMap)
console.log('Original todo ',todos) 