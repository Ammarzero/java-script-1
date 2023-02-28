//// Default Parameters \\\\

/*
function sayHello(name, age) {
    if (age === undefined) {
        age = 'Unknown'
    }
    return `Hello ${name} Your Age Is ${age}`

}*/

function sayHello(name, age = 'Undefined') {
    //age = age || 'Undefined'
    return `Hello ${name} Your Age Is ${age}`
}

console.log(sayHello('Ammar', 17));