// Create a function which returns the average of the given input values

const someData = [10, 20, 30, 40, 50, 60];

function calculateAverage(...nums) {

    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }

    console.log(total / nums.length)
}
calculateAverage(...someData)