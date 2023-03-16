function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}


printNumbers(5, 10);


function printNumbers2(from, to) {
    let current = from;

    function go() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }

    go();
    let timerId = setInterval(go, 1000);
}

printNumbers2(5, 10);