// Write a Function to check weather the given number is Even or Odd
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("The Given Number is Even");
    }
    else {
        console.log("The Given Number is Odd");
    }
}
checkEvenOrOdd(301)


// Within the Given Array print Even if number is Even and Odd if Odd
const numberArray = [1, 2, 3, 4, 5, 20, 43, 12, 33, 56, 37];

function checkEvenOrOddArray(num) {

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            console.log("The Given Number is Even");
        }
        else {
            console.log("The Given Number is Odd");
        }
    }

}
checkEvenOrOddArray(numberArray)


// Check Total Odd and Even present in the Array and Print what is more
function checkEvenAndOddTotal(num) {

    const evenCounter = [];
    const oddCounter = [];

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            evenCounter.push(num[i]);
        }
        else {
            oddCounter.push(num[i]);
        }
    }

    if (evenCounter.length === oddCounter.length) {
        console.log("Both have Same Count");
    }
    else if (evenCounter.length > oddCounter.length) {
        console.log("There are More Even numbers Present: " + evenCounter.length);
        console.log(evenCounter);
    }
    else {
        console.log("There are More Odd numbers Present: " + oddCounter.length);
        console.log(oddCounter);
    }

}
checkEvenAndOddTotal(numberArray)