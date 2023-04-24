const removeFromArray = function(myArray, ...myArgs) {
    const args = [...myArgs];
    for (let i=0; i< args.length; i++){
        myArray = myArray.filter(value => value!==args[i]);
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;