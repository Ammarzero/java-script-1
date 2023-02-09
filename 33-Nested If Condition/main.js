/*
Nestede If
*/

let price = 100;
let discount = true;
let discountAmount = 30;
let = country = "Iraq";
let student = true;

if (discount === false) {

    price -= discountAmount; //Price = Price - DiscountAmount
} else if (country === "Syria" && student === true) {
    price -= discountAmount + 10;
} else if (country === "Egypt") {
    price -= 80;
} else {
    price += 100
}

console.log(price);