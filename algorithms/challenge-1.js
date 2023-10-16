function countCharOccurrences(str, char) {
const regExp = new RegExp(char, 'g');
const match = str.match(regExp);
return match ? match.length : 0;
}
console.log(countCharOccurrences('hello', 'l'));
module.exports = countCharOccurrences;