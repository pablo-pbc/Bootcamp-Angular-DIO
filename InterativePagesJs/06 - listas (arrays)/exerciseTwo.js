/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

const numberList = [];

for (let index = 0; index < 10; index++) {
    numberList.push(index);    
}

for (let i = 0; i < numberList.length; i++) {
    if (numberList[i]%2) {
        console.log(numberList[i])
    } else {
        console.log('')
    }
}