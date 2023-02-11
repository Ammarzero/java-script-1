/*
Arrays
- Create Arrays [Two Methods] new Array() + []
- Access Arrays Elements
- Nested Arrays
- Change Arrays Elements
- Check For Array Array .isArray(arr);
*/
let myFriends = ["Yamen", "Jad", "Waael", ["Ali", "Mohammed"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1][7]}`);

console.log(myFriends);
myFriends[0] = "Jawad";
console.log(myFriends);
console.log(myFriends);
myFriends[3] = ["Dema", "Marwan"];
console.log(myFriends);
console.log(typeof myFriends);
console.log(Array.isArray(myFriends));