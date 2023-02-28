//Операторы сравнения

//Каким будет результат этих выражений?
/*
5 > 4
"ананас" > "яблоко"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
*/

//решение

console.log(5 > 4); //(true)
console.log("ананас" > "яблоко"); //Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я". (false)
console.log("2" > "12"); //Первый символ первой строки "2" больше, чем первый символ второй "1". (true)
console.log(undefined == null); //Значения null и undefined равны только друг другу при нестрогом сравнении.(true)
console.log(undefined === null); //Строгое сравнение разных типов, поэтому false. (false)
console.log(null == "\n0\n"); //null равен только undefined. (false)
console.log(null === +"\n0\n"); //Строгое сравнение разных типов. (false)