// Create a custom function for mimicking map function - Pollyfill

const number = [1, 2, 3, 4, 5, 6, 7, 8];

// Original Map Function Working
const numberSquared = number.map((element) => {
    return element * element;
})
console.log(numberSquared)

// Pollyfill for Map function
Array.prototype.customMapFunction = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
}

const numberSquaredCustom = number.customMapFunction((element) => {
    return element * element;
})
console.log(numberSquared)


// Create a custom function for mimicking filter function - Pollyfill

// Original Map Function Working
const numberFiltered = number.filter((value) => {
    return value > 4;
})
console.log(numberFiltered)

// Pollyfill for Filter function
Array.prototype.customFilterFunction = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {

        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
}

const numberFilteredCustom = number.customFilterFunction((value) => {
    return value > 4;
})
console.log(numberFilteredCustom)


// Create a custom function for mimicking reduce function - Pollyfill

// Count occurences of string in an array using reduce
const stringArray = ["apple", "banana", "orange", "apple", "orange", "banana", "apple"];

const stringCount = stringArray.reduce(function (accumulator, currentValue) {
    if(currentValue in accumulator) {
        accumulator.currentValue += 1;
    }
    else {
        accumulator.currentValue = 1;
    }

    return accumulator;
}, {});

console.log(stringCount);