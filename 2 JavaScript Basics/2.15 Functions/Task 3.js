//Функция min(a, b)

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
//
// Пример вызовов:

console.log(min(2, 5)); // == 2
console.log(min(3, -1)); // == -1
console.log(min(1, 1)); //== 1

console.log(min2(2, 5)); // == 2
console.log(min2(3, -1)); // == -1
console.log(min2(1, 1)); //== 1
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}


function min2(a, b) {
    return a < b ? a : b;
}