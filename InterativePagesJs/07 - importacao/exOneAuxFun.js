/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/

function renderMultiplicationTable(multiplicationTable) {
    for (let index = 0; index <= 10; index++) {
        print(`${index} x ${multiplicationTable} = ${index * multiplicationTable}`);      
    };
}

function print(text) {
    console.log(text);    
}

module.exports = {renderMultiplicationTable, print};