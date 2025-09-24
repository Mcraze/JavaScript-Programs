// Crete a Function to check if the passed string is a Palindrome or Not

// Using provided function such as split-reverse-join
function checkPalindrome(stringText) {

    const reverseStringText = stringText.split("").reverse().join("");

    if (stringText.toLowerCase() === reverseStringText.toLowerCase()) {
        console.log("The given String is a Palindrome: " + stringText);
    }
    else {
        console.log("The given String is not a Palindrome: " + stringText);
    }
}
checkPalindromeCustom("Hello")
checkPalindromeCustom("Bob")


// Entire custom Palindrome checker
function checkPalindromeCustom(stringText) {

    // Take the string and create an array from it and store it in a variable
    const stringArray = [];

    // Provides an Array created from the String
    for (let i = 0; i < stringText.length; i++) {
        stringArray.push(stringText[i]);
    }

    // Reverse the array and store it in the same variable
    for (let i = 0; i < (stringArray.length / 2); i++) {

        let temp = stringArray[i];

        stringArray[i] = stringArray[stringArray.length - (i + 1)]

        stringArray[stringArray.length - (i + 1)] = temp;
    }

    // Joining the reversed array in order to form Reversed String
    let reversedString = "";
    for (let i = 0; i < stringArray.length; i++) {
        reversedString += stringArray[i];
    }

    // Comparing the Actual String with the Reversed String
    if(stringText.toLowerCase() === reversedString.toLowerCase()) {
        console.log("The String is a Palindrome: " + stringText + " : " + reversedString);
    }
    else {
        console.log("The String is Not a Palindrome: " + stringText + " : " + reversedString);
    }

}
checkPalindromeCustom("Hello")
checkPalindromeCustom("Bob")