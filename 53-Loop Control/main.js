/*
Loop Control 
- Break
- Continue
- Label
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

mainloop: for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedloop:
    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] === "Green") {
            break mainloop;
        }
    }
}
