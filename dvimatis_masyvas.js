
const mas2d = [
    [3, 2, 5, 9],
    [6, 9, 3, 5],
    [7, 8, 9, 2],
    [7, 10, 2, 1],
];
console.log(mas2d[1][1]);

for (let i = 0; i < 4; i++) {
    let s = "";
    for (let y = 0; y < 4; y++) {
        s += `${mas2d[i][y]} `;
    }
    console.log(s);
}

console.log("---------------");

for (let i = 0; i < 4; i++) {
    let s = "";
    for (let y = 0; y < 4; y++) {
        s += `${mas2d[y][i]} `;
    }
    console.log(s);
}