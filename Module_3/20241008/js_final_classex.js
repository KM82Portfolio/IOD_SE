//Declare two variables, num1 and num2, and assign them the values by converting the string "15" and "7.5"to their number format respectively.
num1=parseInt("15");
num2=parseInt("7.5");
console.log('num1 = ',num1,'num2 = ',num2);

/*Perform the following operations and store the results in appropriately named variables:
Add num1 and num2
Subtract num2 from num1
Multiply num1 by num2
Divide num1 by num2*/
console.log('Add num1 and num2 : ',num1 + num2);
console.log('Subtract num1 from num2 : ',num1 - num2);
console.log('Divide num1 by num2 : ',num1 / num2);

//Check if num1 is an integer and store the result in a variable.
console.log('num1 is an integer? ',Number.isInteger(num1));
let isIntCheck = Number.isInteger(num1);

//Calculate the remainder when num1 is divided by 4 and store it in a variable.
console.log('Calculate the remainder when num1 is divided by 4 = ',num1%4);

//Write a conditional statement to check if num1 is greater than num2 and print a message based on the result.
if(num1>num2){
    console.log('Yes num1 is greater than num2');
}else {
    console.log('No num1 is not greater than num2');
}