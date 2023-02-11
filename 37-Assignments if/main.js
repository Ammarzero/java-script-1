//Assignment 1
// Test Case 1
let firstNum = 9; // "009"

if (firstNum < 10) {
    console.log(`00${firstNum}`);
}

// Test Case 2
let secondNum = 20; // "020"

if (secondNum > 10 && secondNum < 100) {
    console.log(`0${secondNum}`);
}

// Test Case 3
let thirdNum = 110; // "110"

if (thirdNum >= 100) {
    console.log(thirdNum);
}


//Assignment 2
let num = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
    console.log(`${num1} Is The Same Value As ${str}`);
}

if (num1 == str && typeof num1 != typeof str) {
    console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
}

if (num1 != str2 || typeof num1 !== typeof str2) {
    console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
}

if (str != str2 && typeof str === typeof str2) {
    console.log(`${str} Is The Same Value As ${str2} But The Same Type`);
}


//Assignment 3
let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1 && typeof num3 !== typeof num2) {
    console.log(
        `${num3} Larger Than ${num1} And Type string Not The Same Type As number`
    );
}

if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
    console.log(
        `${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type string Not The Same Type As number`
    );
}

if (num3 !== num1 && typeof num3 !== typeof num2) {
    console.log(
        `${num3}  Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
    );
}



//Assignment 4
let num1 = 15;
let num2 = 1;
let num3 = +"15";
let num4 = 50;

// Condition 1
if (num1 > num2) {
    console.log(true);
} else {
    console.log(false);
}

// Condition 2
if (num1 > num2 && num1 < num4) {
    console.log(true);
} else {
    console.log(false);
}

// Condition 3
if (num1 + num2 && num1 === num3) {
    console.log(true);
} else {
    console.log(false);
}

// Condition 4
if (num1 + num3 < num4) {
    console.log(true);
} else {
    console.log(false);
}

// Condition 5
if (num1 + num3 < num4) {
    console.log(true);
} else {
    console.log(false);
}

// Condition 6
if (num1 + num2 + num3 < num4) {
    console.log(true);
} else {
    console.log(false);
}

// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
    console.log(true);
} else {
    console.log(false);
}

