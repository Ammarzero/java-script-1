//// Rest Parameters \\\\

function calc(...numbers) {
    let result = 0;
    for (let i = 0; i <= numbers.length; i++) {
        result += numbers[i]
    }
    return `the final is ${result}`;
}

console.log(calc(10, 20, 30, 60, 70));

/*
thats all for fixing the problem of
exist alot of elements in one parameters so that can be
useful.
*/