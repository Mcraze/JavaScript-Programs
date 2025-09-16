// Find the Smallest Number present in the Array
const numberArray = [10, 30, 4, 122, 345, 234, 456, 443, 123, 450, 442, 3, 30, 40];

/*
    Solution 1: Using Higher Order Function - Reduce
    Reduce is used to return a singular value through the presented array
    It takes in a callback function with 2 parameters accumulator and current
    We can pass custom value in acc or it by default points to first value in array
    The curr refers to the current value of the array and it iterates over
*/

const smallestUsingReduce = numberArray.reduce(function (acc, curr) {

    if (acc < curr) {
        return acc;
    }
    else {
        return acc = curr;
    }

})
console.log(smallestUsingReduce);


/*
    Solution 2: Creating custom function from scratch
    This is somewhat like a pollyfill of the reduce() function
    Works the same as reduce function, just we have to add the loop inside
*/

function findSmallestNumber(arr) {

    let initialvalue = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (initialvalue >= arr[i]) {
            initialvalue = arr[i];
        }
    }

    return initialvalue;
}

const smallestUsingFunction = findSmallestNumber(numberArray)

console.log(smallestUsingFunction)


/*
    Solution 3: Actually Creating a pollyfill for reduce() function
    The reduce function takes in a callback and a start value,
    So we need to handle the callback and then the startvalue in our code as well
    We make use of Array.prototype.name to create polyfill
    Here this keyword points towards the array polyfill is used on
*/

Array.prototype.reducePolyfill = function (callback, startvalue) {

    let initial;

    if (startvalue === undefined) {
        initial = this[0];
    }
    else {
        initial = startvalue;
    }

    for (let i = 0; i < this.length; i++) {
        initial = callback(initial, this[i])
    }

    return initial;
}

const smallestUsingPolyfill = numberArray.reducePolyfill(function (acc, curr) {

    if (acc < curr) {
        return acc;
    }
    else {
        return acc = curr;
    }

});

console.log(smallestUsingPolyfill)
