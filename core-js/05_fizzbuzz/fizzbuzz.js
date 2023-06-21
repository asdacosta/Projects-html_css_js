// Algorithm
// 1. Take a number input from user.
// 2. Print numbers from 1 to user number in the console.
// 3. In the printed numbers:
//      i. If a number is divisible by 3 and 5, replace it with FizzBuzz
//      ii. If a number is divisible by 3, replace it with Fizz
//      iii. If a number is divisible by 5, replace it with Buzz

// Pseudocode
// 1. Use parseInt and prompt fxns to take number input.
// 2. Use for loop to print numbers in console.
// 3. All results of the if statements should be in console:
//      i. Use if, modulus and && operator.
//      ii. Use if and modulus.
//      iii. Use if and modulus.

let num = parseInt(prompt("Enter the number: "));

for (let m = 1; m <= num; m++) {
    if (m % 3 === 0 && m % 5 === 0) {
        console.log('FizzBuzz');
    } else if (m % 3 === 0) {
        console.log('Fizz');
    } else if (m % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(m);
    }
}