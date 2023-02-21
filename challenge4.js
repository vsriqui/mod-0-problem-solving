//Start with an array of strings. Print only the words that include the letter combination "ing".

// Pseudocode
// This will require a loop to go through each element of the array.
// An if statement can be used to apply a condition of includes "ing"

var includesIngMaybe = ["Smiling", "Going", "Running", "JumpINg", "Throws"];

for (i=0; i<includesIngMaybe.length; i++) {
    if (includesIngMaybe[i].includes("ing")) {
    console.log(`The word includes "ing", in a case sensitive way! ${includesIngMaybe[i]}`);
    }
}