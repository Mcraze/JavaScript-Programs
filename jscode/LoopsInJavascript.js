// for loop - runs until the condition is true
function basicForLoop() {

    for (let i = 0; i < 10; i++) {
        console.log("For " + i);
    }

}
basicForLoop();

// while loop - runs while the condition is true
function basicWhileLoop() {

    let i = 0;

    while (i <= 5) {
        console.log("While " + i);
        i++;
    }

}
basicWhileLoop()

// do while loop - atleast runs once and then runs until condition is true
function basicDoWhileLoop() {

    let i = 0;

    do {
        console.log("Do While: " + i);
        i++;
    }
    while (i <= 5)

}
basicDoWhileLoop();

// for of loop - used to iterate over iteratable values like arrays / strings etc
function basicForOfLoop() {

    const numbers = [1, 2, 3, 4, 5];

    for (const num of numbers) {
        console.log("For of " + num);
    }

}
basicForOfLoop();

// for in loop - used to iterate over objects
function basicForInLoop() {

    const obj = { userName: "Mitesh", userId: 111, userRole: "Frontend Developer" };

    for(const key in obj) {
        console.log("Key name is " + key + " and Key value is " + obj[key])
    }

}
basicForInLoop();

// for each loop - works like a higher order function
function basicForEachLoop() {

    const numbers = [1, 2, 3, 4, 5];

    // Loops over array and does not return anything, use it to log or perform something directly
    numbers.forEach(function(num) {
        console.log("For Each " + num);
    })

}
basicForEachLoop();