// Given an array of strings, return only the words that begin with the letter "t".


// Pseudocode
// I need to take each element of an array and filter out the elements that begin with the letter "t".
// I take the mention of return to mean that it needs to be a function that can take any array.
// The function will require a loop to go through each element of the array and an if statement to be applied to individual elements.


var theTArray = ["T-Rex", "Velociraptor", "Toronto", "New York", "turnip"];
var otherTArray = ["Texas", "tulip", "Telluride", "tongs"];

// A previous solution
// for (i=0; i<theTAndNotTWordsArray.length; i++) {
//     if (theTAndNotTWordsArray[i].startsWith("t")) {
//     console.log(`Starts with a lower case 't'! ${theTAndNotTWordsArray[i]}`);
//     }
// }

// Updated to be a function

function tBeginOnly(array) {
    for (i = 0; i<array.length; i++) {
        if (array[i].startsWith("t")) {
            console.log(`Starts with a lower case 't'! ${array[i]}`);
        }
    }
    return array;
}
tBeginOnly(otherTArray);