/*
Ввод числового значения

Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

    Функция должна возвращать числовое значение.

    Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.*/

const prompt = require("prompt-sync")({ sigint: true });
function readNumber() {
    let num;

    do {
        num = prompt("Введите число ", 0);
    } while ( !isFinite(num) );  //isFinite(value) преобразует аргумент в число и проверяет, что оно не является NaN/Infinity/-Infinity

    if (num === null || num === '') return null;


    return +num;
}

console.log(`Число: ${readNumber()}`);