/*
https://codingjs.wmcicompsci.ca/exercise.html?name=allSwap&title=Map-2

We'll say that 2 strings "match" if they are non-empty and their first chars are the same. 
Loop over and then return the given array of non-empty strings as follows: 
if a string matches an earlier string in the array, swap the 2 strings in the array. 
When a position in the array has been swapped, it no longer matches anything. 
Using a map, this can be solved making just one pass over the array. 
More difficult than it looks.

Examples:
allSwap(["ab", "ac"]) → ac,ab
allSwap(["ax", "bx", "cx", "cy", "by", "ay", "aaa", "azz"]) → ay,by,cy,cx,bx,ax,azz,aaa
allSwap(["ax", "bx", "ay", "by", "ai", "aj", "bx", "by"]) → ay,by,ax,bx,aj,ai,by,bx
*/

function allSwap(wordArray){
    let tracker = {};
    
    for (let i = 0; i < wordArray.length; i++) {
      if (!tracker[wordArray[i][0]]) {
        tracker[wordArray[i][0]] = {word: wordArray[i], index: i};
      } else {
        let temp = wordArray[i];
        wordArray[i] = tracker[wordArray[i][0]].word;
        wordArray[tracker[wordArray[i][0]].index] = temp;
        tracker[wordArray[i][0]] = null;
      }
    }
    
    return wordArray;
}