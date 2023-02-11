/* Array Mrthods [Search]
- indexOf(Search Element, From Index [Opt])
- lastIndexOf(Search Element, From Index [OPt])
- includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFriends = ["Ali", "Ammar", "Yamen", "Jad", "Ammar"];

console.log(myFriends);

console.log(myFriends.indexOf("Ammar"));
console.log(myFriends.indexOf("Ammar", 2));

console.log(myFriends.lastIndexOf("Ammar"));
console.log(myFriends.lastIndexOf("Ammar", -2));

console.log(myFriends.includes("Ammar"));
console.log(myFriends.includes("Ammar", 2));

if (myFriends.lastIndexOf("Ammar") === -1) {
    console.log("NotFound");
}

if (myFriends.lastIndexOf("Osama") === -1) {
    console.log("NotFound");
}