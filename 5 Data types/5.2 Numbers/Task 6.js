/*Случайное целое число от min до max
важность: 2
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

    Любое число из интервала min..max должно появляться с одинаковой вероятностью.

    Пример работы функции:*/

console.log( randomInteger(1, 5) ); // 1
console.log( randomInteger(1, 5) ); // 3
console.log( randomInteger(1, 5) ); // 5

//решение

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand); //округление в меньшую сторону
}