function showInfo(name = 'un', age = 'un', rate = 0, show = 'yes', ...skills) {
    document.write(`<div>`);
    document.write(`<h2>welcome, ${name}</h2>`);
    document.write(`<p>age : ${age}</p>`);
    document.write(`<p>hour rate : ${rate}</p>`);
    if (show === 'yes') {
        if (skills.length > 0) {
            document.write(`<p>${skills.join(" | ")}</p>`);
        } else {
            document.write(`<p>no skills</p>`);
        }
    } else {
        document.write(`<p>The skills are hidden</p>`);
    }
    document.write(`</div>`);
}
showInfo('Ammar', 17, 5, 'yes', 'swimm', 'gym', 'gaming');