//Проверка на спам

/*Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

    Функция должна быть нечувствительна к регистру:*/

checkSpam('buy ViAgRA now') === true;
checkSpam('free xxxxx') === true;
checkSpam("innocent rabbit") === false;

//решение

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
    //.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет.
}

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );