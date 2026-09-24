function fibonacci(n) {
    if (n < 0) {
        return "Valor inválido";
    }

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let proximo = a + b;
        a = b;
        b = proximo;
    }

    return b;
}

let n = parseInt(prompt("Digite um número para calcular o Fibonacci: "));
console.log(fibonacci(n)); 
