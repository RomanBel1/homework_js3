// Задание 1

for (let i = 1; i <= 50; i++) {
    console.log(i);
}

for (let i = 35; i >= 8; i--) {
    console.log(i);
}

// Задание 2

let a = 89;
while (a >= 11) {
    document.write(a + '<br/>');
    a--;
}

// Задание 3

let b = 100;
let sum = 0;
for (let c = 0; c <= b; c++) {
    sum += c;
}
console.log(sum);

// Задание 4

let d = 5;
sum = 0;

for (let e = 1; e <= d; e++) {
    sum = 0;

    for (let f = 1; f <= e; f++) {
        sum += f;
    }

    console.log('sum ' + e + ' = ' + sum);
}

// Задание 5

for (let g = 8; g <= 56; g++) {
    if (g % 2) continue;
    console.log(g);
}

// Задание 6

for (let h = 2; h <= 10; h++) {
    for (let j = 1; j <= 10; j++)
        console.log(h + '*' + j + '=' + (h * j));

}

// Задание 7

for (let n = 1000; n > 30; n = n / 2) {
    console.log(n)
}

// Задание 8



// Задание 9

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';