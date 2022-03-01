// some pretty simple functions, print out a message vs. print out a message in caps:
function printLower(message) {
    console.log(message.toLowerCase());
}

function printUpper(message) {
    console.log(message.toUpperCase())
}

// this function takes a function as an argument and calls it:
function print(message, func) {
    func(message);
}

// we pass in the different functions to get different results:
print('loWeRCAse', printLower);
print('UppERcASe', printUpper);