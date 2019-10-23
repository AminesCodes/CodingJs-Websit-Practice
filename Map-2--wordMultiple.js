/*
Map-2 -- wordMultiple
Given an array of strings, 
return a Map where each different string is a key and its value is true 
if that string appears 2 or more times in the array.
*/



function wordMultiple(wordArray){
    let tracker = {};
    wordArray.forEach(element => {
      if (tracker[element] === undefined) {
          tracker[element] = false;
      } else {
        if (tracker[element] === false) {
          tracker[element] = true;
        }
      }
    });
    return tracker;
  }

console.log(wordMultiple(["a", "b", "a", "c", "b"]))// → {'a': true, 'b': true, 'c': false}
console.log(wordMultiple(["c", "b", "a"]))// → {'c': false, 'b': false, 'a': false}
console.log(wordMultiple(["c", "c", "c", "c"]))// → {'c': true}