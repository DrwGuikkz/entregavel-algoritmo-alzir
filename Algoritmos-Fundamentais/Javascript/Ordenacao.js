function ordenacao(vetor) {
    let arr = [...vetor];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}


let numeros = [];
for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número: "));
}

console.log("Vetor original: " + numeros);
let vetorOrdenado = ordenacao(numeros);
console.log("Vetor ordenado: " + vetorOrdenado);