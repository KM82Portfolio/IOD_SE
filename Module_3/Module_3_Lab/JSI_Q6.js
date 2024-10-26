function unique(duplicatesArray){
    return [...new Set(duplicatesArray)]
}
console.log(unique([1,1,2,3,4,4]))