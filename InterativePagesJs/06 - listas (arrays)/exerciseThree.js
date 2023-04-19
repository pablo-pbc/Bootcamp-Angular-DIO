/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

const names = [];

names.push('Pablo');
names.push('Vania');
names.push('Airton');
names.push('Alexandre');
names.push('Vitor');

for (let index = 0; index < names.length; index++) {  
    if (names[index][0] == 'V') {
        console.log(names[index]);
    };
};