function somatorio(n) {
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma += i;
    }

    return soma;
}

let n = parseInt(prompt("Digite um número para calcular o somatório: "));
console.log("O somatório de 1 até " + n + " é: " + somatorio(n));
