// EXERCISE 1: Guess the random number function
function guessNumberGame() {
    const targetNumber = Math.floor(Math.random() * 10) + 1;
    let guess = null;

    while (guess !== targetNumber) {
        let input = prompt("Guess a number between 1 and 10:");
        if (input === null) break;
        guess = Number(input);

        if (guess < targetNumber) {
            console.log("Too low! Try again.");
        } else if (guess > targetNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log("Correct! You guessed the number.");
        }
    }
}

// EXERCISE 2: Create an array of random numbers function
function generateRandomArray(length) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        randomArray.push(randomNumber);
    }
    return randomArray;
}

// EXERCISE 3: Calculate the sum of even numbers function
function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// --- RUNNING THE CODE ---
// Exercises 2 and 3 run automatically and print to the console without interrupting:
let myArray = generateRandomArray(5);
console.log("Generated Array:", myArray);

let evenSum = sumEvenNumbers(myArray);
console.log("Sum of even numbers in the array:", evenSum);

// Exercise 1 is ready whenever you want to test it. 
// Just type "guessNumberGame()" directly into your browser console, 
// or uncomment the line below:
// guessNumberGame();