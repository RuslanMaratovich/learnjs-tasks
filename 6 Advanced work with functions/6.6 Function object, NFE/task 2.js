function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function () {
        return currentSum;
    };

    return f;
}

console.log(JSON.parse(sum(1)(2))); // 3
console.log(JSON.parse(sum(5)(-1)(2))); // 6
console.log(JSON.parse(sum(6)(-1)(-2)(-3))); // 0
console.log(JSON.parse(sum(0)(1)(2)(3)(4)(5))); // 15