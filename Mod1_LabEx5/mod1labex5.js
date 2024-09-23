let arr1 = new Array();
arr1 = [1,2,"three","four",5.5];

console.log("Original Array is",arr1);

arr1[0]=88;
arr1[3]="sixteen";
console.log("Modified Array with elements at position 1 and 4 replaced is",arr1);

arr2=arr1.pop();
console.log("Modified Array with last element removed is",arr1);