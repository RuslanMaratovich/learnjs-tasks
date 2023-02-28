//Перепишите с использованием функции-стрелки

//Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(    "Вы согласны?",
    function() { console.log("Вы согласились."); },
    function() { console.log("Вы отменили выполнение."); }
);

//Решение

function ask2(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение.")
);