let arr1 = new Array();
arr1 = [1,2,3,4,5.5];

console.log("Original Array is",arr1);

arr1[0]=88;
arr1[3]=16;
console.log("Modified Array with elements at position 1 and 4 replaced is",arr1);

arr1.unshift(888);
console.log("Modified Array with element added at the start is",arr1);
console.log("Getting string property".length);

//arr3=arr1.pop();
//console.log("Modified Array with last element removed is",arr1);

arr1.pop();
console.log("Modified Array with last element removed is",arr1);

/*
let arr1 = new Array();
arr1 = [1,2,"three","four",5.5];

console.log("Original Array is",arr1);

arr1[0]=88;
arr1[3]="sixteen";
console.log("Modified Array with elements at position 1 and 4 replaced is",arr1);

arr1.unshift("Root");
console.log("Modified Array with element added at the start is".arr1);

arr3=arr1.pop();
console.log("Modified Array with last element removed is",arr1);

const array1 = [1, 2, 3];

console.log("Test",array1.unshift(4, 5));
*/