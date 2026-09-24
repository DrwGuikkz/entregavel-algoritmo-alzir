function ehPrimo(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Exemplos:
console.log(ehPrimo(7));  // true
console.log(ehPrimo(10)); // false