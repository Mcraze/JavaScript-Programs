// Program to Swap Numbers from Variables using Temp 
function swapVariablesUsingTemp() {
    let a = 20;
    let b = 30;

    console.log("Value of A before: " + a)
    console.log("Value of B before: " + b)

    let temp = a;

    a = b;
    b = temp;

    console.log("Value of A after: " + a);
    console.log("Value of B after: " + b);
}
swapVariablesUsingTemp();


// Swap Numbers from Variable without using Temp Variable
function swapVariablesNumbers() {
    let a = 20;
    let b = 30;

    console.log("Value of A before: " + a)
    console.log("Value of B before: " + b)

    // A = 20 + 30 = 50
    a = a + b;

    // B = 50 - 30 = 20
    b = a - b;

    // A = 50 - 20 = 30
    a = a - b;

    console.log("Value of A after: " + a);
    console.log("Value of B after: " + b);
}
swapVariablesNumbers();


// Swapping String from one Variable to Another
function swapStringWithoutTemp() {
    let firstName = "Mitesh";
    let lastName = "Adelkar";

    console.log("First Name is: " + firstName);
    console.log("Last Name is: " + lastName);

    // Using destructuring assignment
    [firstName, lastName] = [lastName, firstName]

    console.log("Now the First Name is: " + firstName);
    console.log("Now the Last Name is: " + lastName);
}
swapStringWithoutTemp();