// Game of Thrones: Character Titles
// Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.

// The words and, the, of and in should be lowercase.
// All other words should have the first character as uppercase and the rest lowercase.
// All commas must always be followed by a single space.
// All titles must end with a period.
// Examples

// correctTitle("jOn SnoW, kINg IN thE noRth") ➞ "Jon Snow, King in the North."

// correctTitle("sansa stark,lady of winterfell.") ➞ "Sansa Stark, Lady of Winterfell."


// correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.") ➞ "Tyrion Lannister, Hand of the Queen."

// Notes

// Punctuation and spaces must remain in their original positions.
// All commas must be followed by a single space.
// Titles must end with a period.
// Hyphenated words are considered separate words.
// Be careful with words that contain and, the, of or in.

function correctTitle(sentence){
    let word = sentence.toLowerCase();
    word = word.split(" ").map(word => ["the", "of", "and", "in"].includes(word)
    ? word 
    : word[0].toUpperCase() + word.slice(1)
    )
    
    return word.join(" ");
   
     
}


console.log(correctTitle("jOn SnoW, kINg IN thE noRth"))
console.log(correctTitle("sansa stark,lady of winterfell."))