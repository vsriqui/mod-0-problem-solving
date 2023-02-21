// Given an array of strings, return only the strings that have exactly 4 characters.

// Pseudocode
// The goal is to search the array for the elements that contain only four letter words. 
// To do so I will loop through the array with a for statement, and use length as a boolean comparison operator with an if statement.

var petArray1 = ["bunnies", "rabbits", "moles", "dogs", "cats", "gerbils"];

for (i = 0; i < petArray1.length; i++) {
    if (petArray1[i].length === 4) {
    console.log(`Only 4 characters returned! ${petArray1[i]}`);
    }

}

