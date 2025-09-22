// Create a Function to check if the number is Prime number or Not
function checkPrimeNumber(num) {

    if(num <= 1) {

        return "The given Number is Not Prime";
        
    }
    
    // Using for Loop and iterating till number
    for(let i = 2; i < num; i++) {
        
        if(num % i === 0) {
            return "Then given Number is Not Prime";
        }

    }

    return "Then given Number is Prime";

}
const output = checkPrimeNumber(7);

console.log(output);


// Alternate method using Math.sqrt to run loop until the square root of the given number to improve performance
function checkPrimeNumberAlt(num) {

    if(num <= 1) {

        return "The given Number is Not Prime";
       
    }
    
    // Using for Loop and iterating uptil its square root
    for(let i = 2; i <= Math.sqrt(num); i++) {
        
        if(num % i === 0) {
            return "Then given Number is Not Prime";
        }

    }

    return "Then given Number is Prime";

}
const outputAlt = checkPrimeNumberAlt(7);

console.log(outputAlt);