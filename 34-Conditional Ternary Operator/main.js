/*
Conditional (Ternary) Operator
*/

let theName = "Ammar";
let theGender = "Male";
let theAge = 17;

if (theGender === "Female") {
    console.log("Mrs");
} else {
    console.log("Mr");
}

// Condition ? If True : If False

theGender === "Female" ? console.log("Mrs") : console.log("Mr");
let theResult = theGender === "Male " ? "Mrs" : "Mr";
document.write(theResult);

console.log(theGender === "Male " ? "Mrs" : "Mr");

console.log(`Hello ${theGender === "Male " ? "Mrs" : "Mr"} ${theName} `);
theAge < 20 ? console.log(20) : theAge > 20 && theAge < 60 ? console.log("20 To 60") : theAge > 60 ? console.log("Larger Than 60") : console.log("UnKnown");