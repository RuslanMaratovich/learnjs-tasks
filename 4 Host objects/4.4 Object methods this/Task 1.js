//Использование "this" в литерале объекта
/*
Здесь функция makeUser возвращает объект.

    Каким будет результат при обращении к свойству объекта ref? Почему?*/

/*
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

console.log( user.ref.name ); // Каким будет результат? undefined
*/


//решение

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();

console.log( user.ref().name ); // John
