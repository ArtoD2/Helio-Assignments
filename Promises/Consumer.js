// this consumes a promise
let {isEven} = require('./Promise')

let prom1 = isEven(8)

// if the proimise resolves then ise the "then"function
// of the promise to get the value
// then calls a function, that you define,that accepts
// a single parameter. The value of the promise is 
// passed into that parameter
prom1.then((value) => {
    console.log(value)
})

let prom2 = isEven(45)

prom2
.then((value) => {
    // then gets the value from the resolve function call
    console.log(value)
})
.catch((err) => {
    // then gets the value from the reject function call
    console.log(err)
})

// async and await
// await keyboard must be used in an async function

async function wait() {

    let answer = await isEven(42)

    console.log(answer)
}

async function waitError() {

    try {
        let answer = await isEven(47)
        console.log(answer)
    }
    catch(error){
        console.log(error)
    }
}

// calling async function
wait()
waitError()
// third built in function
// finally
isEven(16)
.then(resValue => {
    console.log(resValue)
})
.catch(err =>{
    console.log(err)
})
.finally(res => {
    // this function is called if the promise is resolved or rejected 
    // it is called last.
    console.log("cleanup")
})