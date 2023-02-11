/*
Array Methods [Adding And Removing]
- unshift("" , "") Add Element to the First
- push ("","") And Element To The End
- shift() Remove First Element From Array
- pop() Remove Last Element From Array
*/

let myFriends = ["Yamen", "Ammar", "Jad", "Ali"];

console.log(myFriends);

myFriends.unshift("Hasan", "Morad");

console.log(myFriends);

myFriends.push("Rand", "Mohammed");

console.log(myFriends);

let first = myFriends.shift();

console.log(myFriends);

console.log(`Hello My Friend ${first}`);

///////// pop : :)

let Last = myFriends.pop();

console.log(myFriends);

console.log(`Hello My Friend ${Last}`);