/*
Arrays Methods [Joining]
- concat(array, array) => Return A New Array
- join(Seperator)
*/

let myFriends = ["Ahmed", "Ammar", "Yamen", "Jad", "Hani", "Rami"];
let myNewFriends = ["Samer", "Maysaa"];
let schoolFriends = ["Haytham", "Shadi"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Farouk", [1, 2]);

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(" / "));