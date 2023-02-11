//Assignment 1 

myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// 1 
myFriends.pop();

console.log(myFriends); // ["Ahmed", "Elham", "Osama"]

// 2 
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"]

//Assignment 2 

let friends = ["Ahmed", "Elham", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Elham", "Osama"]

//Assignment 3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//Assignment 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
    words[words.length - words.indexOf("Facebook")][0]
        .slice(words.length - words.indexOf("Facebook"))
        .toUpperCase()
); // ZERO


//Assignment 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// 1
if (haystack.includes(needle)) {
    console.log("Found"); // Found
}

//  2
if (haystack.includes(haystack[1])) {
    console.log("Found"); // Found
}

// 3
if (haystack.includes(haystack.slice(0))) {
    console.log("Found"); // Found
}
Footer
© 2023 GitHub, Inc.
Footer navigation

Terms
Privac

//Assignment 6

let aar1 = ["A", "C", "X"];
let aar2 = ["D", "E", "F", "Y"];
let allArrs = aar1.concat(aar2).sort().join("").toLowerCase().slice(-3);

console.log(allArrs); 