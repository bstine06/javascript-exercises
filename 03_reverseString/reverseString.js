const reverseString = function(myString) {
    let myArray = myString.split('');
    myArray = myArray.reverse();
    return myArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
