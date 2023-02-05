// Add Variables Here
let NumberOne = 10;
let NumberTwo = 20;

console.log(typeof (NumberOne));
console.log(typeof (NumberTwo));

// Ouput
console.log("1020"); // Normal Concatenate => 1020
console.log(typeof ("1020")); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof (`${NumberOne}${NumberTwo}`)); // Template Literals Way => String

console.log(`${NumberTwo}
${NumberOne}`);
/*
  Normal Concatenate
  20
  10
*/

console.log("20\n10");
/*