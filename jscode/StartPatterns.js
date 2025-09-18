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


// Function to Print Centered Pyramid Structure
function centerPyramidStarPattern(num) {

    let singleRow = "";

    for (let i = 0; i < num; i++) {

        for (let space = num; space > i; space--) {

            singleRow += " ";

        }

        for (let j = 0; j <= i; j++) {

            singleRow += "*";
        }

        singleRow += "\n";
    }

    return singleRow;
}
console.log(centerPyramidStarPattern(8));


// Function to Print Reverse Cetered Pyramid Structure
function revCenterPyramidStarPattern(num) {

    let singleRow = "";

    for (let i = num; i > 0; i--) {

        for (let space = i; space <= num; space++) {

            singleRow += " ";

        }

        for (let j = 0; j < i; j++) {

            singleRow += "*";
            
        }

        singleRow += "\n";
    }

    return singleRow;
}
console.log(revCenterPyramidStarPattern(8));


// Function to Print Numeric Centered Pyramid Structure
function centerPyramidNumericPattern(num) {

    let singleRow = "";

    for (let i = 0; i < num; i++) {

        for (let space = num; space > i; space--) {

            singleRow += " ";

        }

        for (let j = 0; j <= i; j++) {

            singleRow += "" + (j + 1);
        }

        singleRow += "\n";
    }

    return singleRow;
}
console.log(centerPyramidNumericPattern(8));


// Function to Print Numeric Centered Pyramid Structure
function revCenterPyramidNumericPattern(num) {

    let singleRow = "";

    for (let i = num; i > 0; i--) {

        for (let space = i; space <= num; space++) {

            singleRow += " ";

        }

        for (let j = 0; j < i; j++) {

            singleRow += "" + (j + 1);
        }

        singleRow += "\n";
    }

    return singleRow;
}
console.log(revCenterPyramidNumericPattern(8));