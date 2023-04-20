/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

const { gets, print } = require('./exTwoAuxFun');

const quantidadeNumeros = gets();
let maiorValorEncontrado = quantidadeNumeros[0];
let menorValorEncontrado = quantidadeNumeros[0];

for (let i = 0; i < quantidadeNumeros.length; i++) {
    const numeroSorteado = quantidadeNumeros[i];
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }

    if (numeroSorteado < menorValorEncontrado) {
        menorValorEncontrado = numeroSorteado;
    }
}

print(`Maior valor encontrado: ${maiorValorEncontrado}`);
print(`Menor valor encontrado: ${menorValorEncontrado}`);

