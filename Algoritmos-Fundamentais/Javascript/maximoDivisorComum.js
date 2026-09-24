function maximoDivisorComum(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }

    return a;
}

let a = parseInt(prompt("Digite o primeiro número: "));
let b = parseInt(prompt("Digite o segundo número: "));

console.log("O máximo divisor comum de " + a + " e " + b + " é: " + maximoDivisorComum(a, b));