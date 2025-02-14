// Arrays com nomes de cidades
const cidadesBrasileiras = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador"];
const cidadesEstrangeiras = ["Nova York", "Londres", "Tóquio", "Paris"];

// Concatenando os arrays
const todasCidades = cidadesBrasileiras.concat(cidadesEstrangeiras);

// Exibindo o array resultante no console
console.log(todasCidades);

// Array com nomes de animais
const animais = ["Cachorro", "Gato", "Elefante", "Leão", "Girafa", "Zebra"];

// Removendo 2 animais a partir da terceira posição e substituindo por outros 2
animais.splice(2, 2, "Tigre", "Panda");

// Exibindo o array resultante no console
console.log(animais);

// Array com números
const numeros = [10, 20, 30, 40, 60];

// Verificando se há pelo menos um número maior que 50
const possuiMaiorQue50 = numeros.some(num => num > 50);

// Exibindo o resultado no console
if (possuiMaiorQue50) {
    console.log("O array possui pelo menos um número maior que 50");
} else {
    console.log("O array não possui números maiores que 50");
}

// Somando valores com um loop for
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

// Exibindo o resultado da soma no console
console.log("A soma dos números do array é:", soma);

// Somando valores com um loop while
let somaWhile = 0;
let index = 0;
while (index < numeros.length) {
    somaWhile += numeros[index];
    index++;
}

// Exibindo o resultado da soma no console
console.log("A soma dos números do array usando while é:", somaWhile);
