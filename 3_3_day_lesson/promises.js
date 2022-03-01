// a promise takes in a function that has 2 functions as a parameter
// and then calls them based on success/failure:
let myPromise = new Promise(function(resolve, reject) {
    var success = true;
    if(success) {
        resolve('The process succeeded!');
    }
    else {
        reject('The process failed :(');
    }
})

// create some simple functions to demonstrate success vs. failure:
successMessage = (message) => console.log('Success: ' + message);
failureMessage = (message) => console.error('Error: ' + message);


// fill in the parameters with the functions we created:
myPromise.then(successMessage).catch(failureMessage);

console.log("After promise");

