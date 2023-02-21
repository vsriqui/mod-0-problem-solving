// Given a sentence with only lowercase letters, 
// print the same sentence with the first letter of every word capitalized. 
// For example, if you were given "Turing is the best", 
// return "Turing Is The Best" instead!

// Pseudocode
// The challenge includes the word return, which means a function is required, and also implies it can be given a diff sentence.
// To do this the sentence needs to be turned into an array, so that individual words in the original string can be treated like individual elements.
// It then needs to be looped through to slice the first letter of each word off and uppercase those first letter.
// The array of words needs a join method to make it one sentence again.



var sentenceTuring = ("turing is the best");
// Did it with just a for loop
// var sentenceArray = sentence.split(" ");


// for (i=0; i<sentenceArray.length; i++) {
//     sentenceArray[i] = sentenceArray[i][0].toUpperCase()+sentenceArray[i].slice(1);   
// }

// var sentenceArrayComplete = sentenceArray.join(" ");
// console.log(sentenceArrayComplete);

// As a function that can print any sentence.

var sentenceBaloney = ("i really like baloney");

function sentenceArrayComplete2(sent1) {
    var sentenceArray = sent1.split(" ");
        for (i=0; i<sentenceArray.length; i++) {
            sentenceArray[i] = sentenceArray[i][0].toUpperCase()+sentenceArray[i].slice(1);   
        }
    var sentenceArrayComplete = sentenceArray.join(" ");
    return sentenceArrayComplete;
}

console.log(sentenceArrayComplete2(sentenceTuring));