// Create Function to remove Duplicate values from the given Array

const randomArray = [1, 2, 3, 4, 5, 1, 2, 3, 7, 8]
const textArray = ["Mitesh", "Mitesh", "Something"]

console.log("Original Value: ", randomArray)
console.log("Original Value: ", textArray)

// Remove Duplicates using includes method
function removeDuplicateCustom(arrValues) {
    const newArray = []
    for (let i = 0; i < arrValues.length; i++) {
        if (!newArray.includes(arrValues[i])) {
            newArray.push(arrValues[i])
        }
    }
    console.log("For Loop: ", newArray);
}
removeDuplicateCustom(randomArray)
removeDuplicateCustom(textArray)


// Removing duplicates using Set method
function removeDuplicateOptimized(arrValues) {
    const newArray = [...new Set(arrValues)]
    console.log("Using Set: ", newArray);
}
removeDuplicateOptimized(randomArray)
removeDuplicateOptimized(textArray)


// Removing duplicates using reduce method
const removeDuplicateReduce = (arrValues) => {
    const newArr = arrValues.reduce((acc, curr) => {
        if (!acc.includes(curr)) {
            acc.push(curr)
        }
        return acc
    }, [])
    console.log("Using Reduce: ", newArr);
}
removeDuplicateReduce(randomArray)
removeDuplicateReduce(textArray)