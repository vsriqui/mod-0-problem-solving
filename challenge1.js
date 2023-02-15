// Given an array of strings, return only the strings that have exactly 4 characters.

var petArray1 = ["bunnies", "rabbits", "moles", "dogs", "cats", "gerbils"];

for (i = 0; i < petArray1.length; i++) {
    if (petArray1[i].length === 4) {
    console.log(`Only 4 characters returned! ${petArray1[i]}`);
    }

}

// Start with an array of strings with a mix of uppercase and lowercase letters. 
// Print every word in all lowercase letters.

var lowerAndUpperCaseArray = ["Giraffe", "BuNnY", "rApToR"];

for (i=0; i<lowerAndUpperCaseArray.length; i++) {
    console.log(`Now lower case! ${lowerAndUpperCaseArray[i].toLowerCase()}`);
}

// Given an array of strings, return only the words that begin with the letter "t".

var theTAndNotTWordsArray = ["T-Rex", "Velociraptor", "Toronto", "New York", "turnip"];

for (i=0; i<theTAndNotTWordsArray.length; i++) {
    if (theTAndNotTWordsArray[i].startsWith("t")) {
    console.log(`Starts with a lower case 't'! ${theTAndNotTWordsArray[i]}`);
    }
}

//Strings. Print only the words that include the letter combination "ing".

var includesIngMaybe = ["Smiling", "Going", "Running", "JumpINg", "Throws"];

for (i=0; i<includesIngMaybe.length; i++) {
    if (includesIngMaybe[i].includes("ing")) {
    console.log(`The word includes "ing", in a case sensitive way! ${includesIngMaybe[i]}`);
    }
}

// Start with an array of travel destinations. 
// Print every travel destination in alphabetical order embedded in a sentence using string interpolation. 
// For example, if the destination is "New York City", 
// print something like "The next place I want to visit is New York City!"

var travelDestinationsArray = ["Yosemite", "Everglades", "Zion", "Kings Canyon", "Black Canyon"];
var sortedTravelDestinationArray = travelDestinationsArray.sort()
console.log(sortedTravelDestinationArray)

for (i=0; i<sortedTravelDestinationArray.length; i++) {
    console.log(`If you want to visit a beautiful National Park, ${sortedTravelDestinationArray[i]} is the place to be!`);
}

// Given a sentence with only lowercase letters, 
// print the same sentence with the first letter of every word capitalized. 
// For example, if you were given "Turing is the best", 
// return "Turing Is The Best" instead!

var sentence = ("turing is the best");
var sentenceArray = sentence.split(" ");


for (i=0; i<sentenceArray.length; i++) {
    sentenceArray[i] = sentenceArray[i][0].toUpperCase()+sentenceArray[i].slice(1);   
}

var sentenceArrayComplete = sentenceArray.join(" ");
console.log(sentenceArrayComplete);



