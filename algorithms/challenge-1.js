function countCharOccurrences(str, char) {
const regExp = new RegExp(char, 'g');  // Create a regular expression for the character
const match = str.match(regExp); // Use the regular expression to find all matches
return match ? match.length : 0; // Return the count of matches or 0 if there are no matches
}
console.log(countCharOccurrences('hello', 'l'));
module.exports = countCharOccurrences;