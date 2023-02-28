function calc(num1, num2) {
    return num1 + num2;
}

let result = calc(10, 2);

console.log(result);



function years(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
        if (i === 15) {
            return `interrupted`;
        }
    }
}

years(10, 20);