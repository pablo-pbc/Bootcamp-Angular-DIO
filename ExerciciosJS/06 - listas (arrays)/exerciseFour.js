/*
4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
*/

const pairNumberList = [];

for (let index = 10; index <= 50; index += 2) {    
    pairNumberList.push(index);    
    console.log(`Numero ${index} adicionado a lista!`)
}

console.log(pairNumberList);