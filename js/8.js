/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case*/

function isIsogram(str){
    //...
    const firstArr = [...str.toLowerCase()]
    const secondArr = firstArr.filter((element, index, arr) => arr.indexOf(element) === index)
    
    return firstArr.length === secondArr.length
}
   
// return  [...str.toLowerCase()].every((element, index, arr) => element !== arr[index -1])? true: false;

console.log(isIsogram("Dermatoglyphics")) 
console.log(isIsogram("aba") ) 
console.log(isIsogram("moOse")) 

