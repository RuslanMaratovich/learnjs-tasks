//Функция pow(x,n)

//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

//pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

const prompt = require("prompt-sync")({ sigint: true });
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    console.log( pow(x, n) );
}