// For loop
    for (i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 === 0) {
            console.log(i, "FizzBuzz")
        } else if (i % 3 === 0) {
            console.log(i, "Fizz")
        } else if (i % 5 === 0) {
            console.log(i, "Buzz")
        } else {
            console.log(i)
        }
    }


//  Do/While loop
let num = 0
do {
    if (num % 3 == 0 && num % 5 === 0) {
        
        console.log(num, "FizzBuzz")
        num++
    } else if (num % 3 === 0) {
        
        console.log(num, "Fizz")
        num++
    } else if (num % 5 === 0) {
        
        console.log(num, "Buzz")
        num++
    } else {
        console.log(num)
        num++
    }
} while (num <= 100);



// While loop, finished
while (o <= 99) {
    o++
    if (o % 3 == 0 && o % 5 == 0) {
        console.log(o, "Fizzbuzz")
    } else if (o % 3 == 0) {
        console.log(o, "Fizz")
    } else if (o % 5 == 0) {
        console.log(o, "Buzz")
    } else {
        console.log(o)
    }
}


