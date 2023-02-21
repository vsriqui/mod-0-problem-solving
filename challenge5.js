// Start with an array of travel destinations. 
// Print every travel destination in alphabetical order embedded in a sentence using string interpolation. 
// For example, if the destination is "New York City", 
// print something like "The next place I want to visit is New York City!"

// Pseudocode
// This requires a method to sort the array before it goes through a loop
// Since I am printing every sentence, I just need to print the loop and embed string interpolation within the sentence.

var travelDestinationsArray = ["Yosemite", "Everglades", "Zion", "Kings Canyon", "Black Canyon"];
var sortedTravelDestinationArray = travelDestinationsArray.sort();
console.log(sortedTravelDestinationArray);

for (i=0; i<sortedTravelDestinationArray.length; i++) {
    console.log(`If you want to visit a beautiful National Park, ${sortedTravelDestinationArray[i]} is the place to be!`);
}