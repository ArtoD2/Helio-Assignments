// THIS FUNCTION returns a promise. 
// It checks to see if a number is even.
// if it is even, the promise resolves
// if is is odd, the promise rejects
function isEven(number){
    
    // create a promise
    let prom = new Promise((resolve, reject) => {
        
        // if statement (modulous operator) for testing value
        if (number % 2 === 0){
            resolve(`The number ${number} is even.`)
        } else {
            reject(`The number ${number} is odd.`)
        }
    })
    return prom

}
// module assigning (exporting) the object and assigning 
// it to the function in this file to be used elsewhere
module.exports.isEven = isEven 