/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/

//Running on node.js
const readline = require('readline');
const promptSimulator = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

promptSimulator.question('Informe qual tabuada deseja consultar: ', (multiplicationTable) => {

    console.log('Table from function');
    renderMultiplicationTable(multiplicationTable);

    console.log('');

    console.log('Table from class object');
    const table = new MultiplicationTable(multiplicationTable);
    table.calcMultiplicationTable(multiplicationTable);

    promptSimulator.close();
});

function renderMultiplicationTable(multiplicationTable) {
    console.log(`Você escolheu consultar a tabuada do número: ${multiplicationTable}`);
    for (let index = 0; index <= 10; index++) {
        console.log(`${index} x ${multiplicationTable} = ${index * multiplicationTable}`);      
    };
}

class MultiplicationTable {
    number;

    constructor(number) {
        this.number = number;
    }

    calcMultiplicationTable(number) {
        console.log(`Você escolheu consultar a tabuada do número: ${number}`);
        for (let index = 0; index <= 10; index++) {
            console.log(`${index} x ${number} = ${index * number}`);        
        };
    }
}