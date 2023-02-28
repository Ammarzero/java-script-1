/*
Loop
- Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
    console.log("#".repeat(15));
    console.log(`- $ ${products[i]}`);
    console.log("#".repeat(15));
    console.log("colors :");
    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
    }
    for (let k = 0; k < colors.length; k++) {
        console.log(`- ${colors[k]}`);
    }
}