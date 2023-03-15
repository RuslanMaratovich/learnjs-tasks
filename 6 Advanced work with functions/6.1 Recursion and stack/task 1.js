function sumToСycle(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log( sumToСycle(100) );


function sumToRecursion(n) {
    if (n == 1) return 1;
    return n + sumToRecursion(n - 1);
}

console.log( sumToRecursion(100) );


function sumToFormule(n) {
    return n * (n + 1) / 2;
}

console.log( sumToFormule(100) );
