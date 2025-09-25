// Check if the Provided number is Armstrong Number or Not

// Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
function checkArmstrongNumber(num) {

    // Converting the recieved number into Array to iterate
    let numArray = num.toString().split("").map(i => parseInt(i))

    let finalTotal = 0;

    for (let i = 0; i < numArray.length; i++) {

        // Performing Necessary Calculation
        finalTotal += (numArray[i] ** numArray.length)

    }

    if (finalTotal === num) {
        console.log("The Given Number is an ArmStrong Number: " + num);
    }
    else {
        console.log("The Given Number is not an ArmStrong Number: " + num);
    }

}
// checkArmstrongNumber(153)


// CustomFunction from Scratch
function checkArmstrongNumberCustom(num) {

    console.log("Passed Number: " , num)

    // Converting the Number to String
    let numString = num.toString();
    console.log("String Number: " , numString)

    // Splitting the String to create an Array
    const stringArray = [];

    for (let i = 0; i < numString.length; i++) {
        stringArray.push(numString[i]);
    }
    console.log("String Array: " , stringArray)

    // Converting the stringArray into numberArray using Parsing
    const numberArray = [];

    for (let i = 0; i < stringArray.length; i++) {
        numberArray.push(parseInt(stringArray[i]))
    }
    console.log("Number Array: " , numberArray)

    // Final Iteration with Logic
    let finalTotal = 0;

    for (let i = 0; i < numberArray.length; i++) {

        // Performing Necessary Calculation
        finalTotal += (numberArray[i] ** numberArray.length)

    }
    console.log("Final Total: " , finalTotal)

    if (finalTotal === num) {
        console.log("The Given Number is an ArmStrong Number: " + num);
    }
    else {
        console.log("The Given Number is not an ArmStrong Number: " + num);
    }

}
checkArmstrongNumberCustom(153)