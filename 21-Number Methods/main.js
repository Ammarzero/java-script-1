/*
Number Methods
- Two Dots To Call A Methods
- toString ()
- toFixed ()
- parseInt ()
- parseFloat ()
- isInteger [ES6]
- isNaN [ES6]
*/

console.log((100).toString());
console.log(100..toString());

console.log(88.54333333.toFixed(3));

console.log(+"199 Ammar");
console.log(parseInt("199 Ammar"));
console.log(parseInt("Ammar 199 Ammar"));
console.log(parseFloat("100 Ammar"));

console.log(parseInt("199.700 Ammar"));
console.log(parseFloat("100.700 Ammar"));

console.log(Number.isInteger("100"));

console.log(Number.isInteger(100.7777));

console.log(Number.isInteger(100));

console.log(Number.isNaN("Ammar" * 5));