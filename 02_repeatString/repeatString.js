const repeatString = function(myString, numberOfRepeats) {
    if (numberOfRepeats < 0) {
        return 'ERROR';
    };
    let result = "";
    for (let i = 0; i < numberOfRepeats; i++) {
        result += myString;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
