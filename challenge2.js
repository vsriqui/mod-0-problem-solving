// Start with an array of strings with a mix of uppercase and lowercase letters. 
// Print every word in all lowercase letters.

// Pseudocode
// The objective is to take an array and convert each element of the array to all lowercase letters.
// To do this I will need a for loop to go through each element, and I will need the lowercase method to convert each element to lowercase.

var lowerAndUpperCaseArray = ["Giraffe", "BuNnY", "rApToR"];

for (i=0; i<lowerAndUpperCaseArray.length; i++) {
    console.log(`Now lower case! ${lowerAndUpperCaseArray[i].toLowerCase()}`);
}
