function checkNumber(num) {
    if (num < 0) {
        return "Negative";
    } else if(num > 0) {
        return "Positive"
    } else {
        return "Zero";
    }
}
console.log(checkNumber(1));
module.exports = checkNumber;
