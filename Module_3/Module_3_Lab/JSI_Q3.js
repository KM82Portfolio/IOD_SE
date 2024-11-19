let animals = ['Tiger', 'Giraffe']
animals.push('Elephant')// 3a
console.log(animals)
animals.unshift('Lion','Rhinoceros')// 3b
console.log(animals)
animals.sort()
console.log(animals)

function replaceMiddleAnimal(newValue,animalArray){
    let al = animalArray.length
    let elemToReplace = Math.floor(al/2)
    animalArray.splice(elemToReplace,1,newValue)
    return animalArray
}
console.log(replaceMiddleAnimal('Unicorn',animals))

function findMatchingAnimals(beginsWith,animals){
    animalsFiltered = animals.filter((a)=>a.startsWith(beginsWith))
    return animalsFiltered;
}
console.log(findMatchingAnimals('Gir',animals))