let a = "Elzero Web School";



console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero



console.log(
    a
        .substring(a.length - 4, a.length - 3)
        .toUpperCase()
        .repeat(8)
);



console.log(a.split(" ", 1));



console.log(`${a.substr(0, 6)} ${a.substr(-6, 6)}`); // Elzero School



console.log(
    `${a.charAt(0).toLowerCase()}${a.substr(1, 15).toUpperCase()}${a
        .substring(a.length - 1)
        .toLowerCase()}`
); // eLZERO WEB SCHOOl