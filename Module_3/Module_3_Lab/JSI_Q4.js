// Answers Q4a&b since conditional operator not used
function camelCase(cssProp){

    [s1,s2]=cssProp.split('-');
    s2=s2.charAt(0).toUpperCase()+s2.slice(1);
    return s1.concat(s2)

}
console.log(camelCase('margin-left'))