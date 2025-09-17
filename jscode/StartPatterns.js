// Function to Print Pyramid Pattern
function pyramidStarPattern(num) {

    let singleRow = "";

    for (let i = 0; i < num; i++) {

        for (let j = 0; j <= i; j++) {

            singleRow += "* ";

        }

        singleRow += "\n";

    }

    return singleRow;
}
console.log(pyramidStarPattern(5))


// Function to Print Reverse Pyramid Pattern
function reversePyramidStarPattern(num) {

    let singleRow = "";

    for (let i = num; i > 0; i--) {

        for (let j = 0; j < i; j++) {

            singleRow += "* ";

        }

        singleRow += "\n";

    }
    return singleRow;
}
console.log(reversePyramidStarPattern(5))


// Function to Print Numeric Pyramid Pattern
function numericPyramidPattern(num) {

    let singleRow = "";

    for (let i = 0; i < num; i++) {

        for (let j = 0; j <= i; j++) {

            singleRow += (j + 1) + " ";

        }

        singleRow += "\n";

    }

    return singleRow;
}
console.log(numericPyramidPattern(5))

// Function to Print Numeric Pyramid Pattern
function revNumericPyramidPattern(num) {

    let singleRow = "";

    for (let i = num; i > 0; i--) {

        for (let j = 0; j < i; j++) {

            singleRow += (j + 1) + " ";

        }

        singleRow += "\n";

    }

    return singleRow;
}
console.log(revNumericPyramidPattern(5))