// String Methods Practice

// String Length
let firstName = "Mitesh";
let lastName = "Adelkar";

// Length of a string
console.log("Length of a String: " + firstName.length);

// Character at 5th place - index starts at 0
console.log(firstName.charAt(4));

// Character at 5th place - index starts at 0
console.log(firstName.at(4));

// at is new addition which lets you use negative indexes as well
console.log(firstName.at(-3));

// Converting string to uppercase
console.log(firstName.toUpperCase());

// Converting string to lowercase
console.log(firstName.toLowerCase());

// Use toLocale for more language specific conversions - Takes users host into account
console.log(firstName.toLocaleUpperCase());
console.log(firstName.toLocaleLowerCase());