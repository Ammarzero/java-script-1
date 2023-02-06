/*
Challenge 1 */

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);/* => 11 + 20 + 80 - 11 = 100 */
console.log(++a + -b + +c++ - -a++ + +a);/* => 11 + (-20) + 80 - 10 + 10 =71 */
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);/* 79 + 20 + 9 * 20 - 20 * 10 + 9 - 1 = 87
 

