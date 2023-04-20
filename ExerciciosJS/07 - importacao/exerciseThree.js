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

const { gets, print } = require('./exThreeAuxFun');

const numbers = gets();
const pairNumbers = [];

for (let index = 0; index < numbers.length; index++) {    
    if (numbers[index]%2 == 0 && numbers[index] != 0) {
        pairNumbers.push(numbers[index]);
    };    
};

print(`Numeros pares: ${pairNumbers}`);
