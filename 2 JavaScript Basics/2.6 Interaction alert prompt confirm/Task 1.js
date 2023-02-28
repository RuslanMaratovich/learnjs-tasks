//Простая страница

//Создайте страницу, которая спрашивает имя у пользователя и выводит его.

const prompt = require("prompt-sync")({ sigint: true });
let name = prompt("Ваше имя? ", "");
console.log(name);