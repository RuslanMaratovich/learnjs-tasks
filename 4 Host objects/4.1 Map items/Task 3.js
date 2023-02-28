//Объекты-константы?

//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete";

//решение


const user = {
    name: "John"
};

// Работает!
user.name = "Pete";

