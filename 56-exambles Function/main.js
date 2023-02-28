//Exambles on function

function sayHello(user, age) {
    if (age > 30) {
        console.log(`Sorry it isnt availble`);
    } else {
        console.log(`Hi ${user} your age is ${age}`);
    }
}

sayHello('Ammar', 17);



function years(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
years(2000, 2023);