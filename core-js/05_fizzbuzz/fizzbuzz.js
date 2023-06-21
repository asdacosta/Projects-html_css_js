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