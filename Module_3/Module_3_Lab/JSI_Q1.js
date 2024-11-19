/*
1. Create a function that takes a string as a parameter and returns the string with the first character of each word changed into a capital letter, 
as in the example below. Test it with different strings.
*/
function ucFirstLetters(stringtoConvert){
    [s1,s2] = stringtoConvert.split(' ');
    s1=s1.charAt(0).toUpperCase()+s1.slice(1);
    s2=s2.charAt(0).toUpperCase()+s2.slice(1);
    return [s1,s2].join(' ');
}
console.log(ucFirstLetters("los angeles") ) //Los Angeles