// Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number. If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message "Not matched"

const comment = document.querySelector('#comment');

function randomCheck() {
    const randomNumberGenerate = Math.ceil(Math.random()*10);
    const gnum = prompt('Guess the number between 1 to 10');
    console.log(randomNumberGenerate);
    if(gnum == randomNumberGenerate) {
        comment.innerHTML = 'Good work';
    } else {
        comment.innerHTML = 'Not matched';
    }
}
// randomCheck();

// Write a JavaScript program to calculate multiplication and division of two numbers (input from user). 


function multiply() {
    const x = document.querySelector('#input1').value;
    const y = document.querySelector('#input2').value;
    document.querySelector('#output').innerHTML = x*y;
    document.querySelector('#input1').value = null;
    document.querySelector('#input2').value = null;
}
function divide() {
    const x = document.querySelector('#input1').value;
    const y = document.querySelector('#input2').value;
    document.querySelector('#output').innerHTML = x/y;
    document.querySelector('#input1').value = null;
    document.querySelector('#input2').value = null;
}

// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.


function celToFer() {
    const input = document.querySelector('#temp').value;
    const fer = (input - 32) / 9 * 5;
    document.querySelector('#result').innerHTML = `${input} \xB0F to ${fer} \xB0C`;
}

function ferToCel() {
    const input = document.querySelector('#temp').value;
    const cel = (input / 5 * 9) + 32;
    document.querySelector('#result').innerHTML = `${input} \xB0C = ${cel} \xB0F`;
}

// Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
function checkDiffernce(input) {
    const x = 13;
    if(input <= 13) {
        console.log(x-input);
    } else {
        console.log((input - x) * 2);
    }
}
checkDiffernce(30);
checkDiffernce(11);

// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function sumOfTwoIntegers(a, b) {
    if(a === b) {
        return (a + b) * 3;
    }else {
        return a+b;
    }
}
// const sum = sumOfTwoIntegers(10, 30);
// console.log(sum);

function absoluteDifference(number) {
    const x = 19;
    if(number > x) {
        return (number - x) * 3;
    }else {
        return x - number;
    }
}
// const value = absoluteDifference(29)
// console.log(value);

// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

const sumOfFifty = (a, b) => {
    const x = 50;
    if(a === x || b === x || a+b === x) {
        return true
    } else {
        return false;
    }
}
const sum = sumOfFifty(10, 20);
console.log(sum);
