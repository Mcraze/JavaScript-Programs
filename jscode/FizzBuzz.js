// FizzBuzz Program

/*
    Print FizzBuzz if the number is divisible by 3 and 5 both
    Print Fizz if number is divisible by 3 but not by 5
    Print Buzz if the number is divisible by 5 but not by 3
    If Not divisible by both of them print the number itself
*/

// Making use of rest operator
function FizzBuzz(...args) {

    // assigning the reference to the args array to numbersArray
    const numbersArray = args;

    for(let i = 0; i < numbersArray.length; i++) {
        
        if(numbersArray[i] % 3 === 0 && numbersArray[i] % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if(numbersArray[i] % 3 === 0) {
            console.log("Fizz");
        }
        else if(numbersArray[i] % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(numbersArray[i]);
        }
    }

}

// Rest operator ensures n number of values can be passed in a function
FizzBuzz(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)