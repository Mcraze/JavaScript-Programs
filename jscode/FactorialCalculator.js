// Calculate Factorial of a number using Function
function calculateFactorial(num) {

    if (num === 0) {
        return 1;
    }

    let output = 1;

    for (let i = 1; i <= num; i++) {

        output *= i;

    }

    console.log(output);
}
calculateFactorial(5)


// Calculate Factorial using Recursion
function factorialUsingRecursion(num) {

    // Stop recursion after reaching 0
    if (num === 0) {
        return 1
    }

    return num * factorialUsingRecursion(num - 1)
}
const finalOutput = factorialUsingRecursion(5)

console.log(finalOutput);