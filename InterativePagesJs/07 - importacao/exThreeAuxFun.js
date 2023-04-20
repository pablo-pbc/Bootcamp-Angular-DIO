/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

const entradas = [4, 100, 150, 90, 200, 2, 500, 1, 15, 3000];

function gets() {
    const valor = entradas;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };