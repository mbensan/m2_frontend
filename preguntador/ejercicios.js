// Ejercicios JS
// 1.
let x = 10
let y = "a"

y == "b" || x >= 10

// 2.
let a = 3
let b = 8

!(a == "3" || a == b) || (y !== 8 && a <= b)



// 3.
let num = 1
while (num <= 10) {
    console.log(num);
    num += 2
}

// 4.
let i = 1
while (i <= 20) {
    if (!(i % 4 == 0)) {
        console.log(i);
    }
    i++
}

// 5.
let j = 20
while (j >= 5) {
    console.log(j);
    j -= 3
}
