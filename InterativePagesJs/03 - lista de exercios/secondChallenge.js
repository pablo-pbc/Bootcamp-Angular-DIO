/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/
//Running on browser
/*
let peso = parseInt(prompt(`Digite o peso em kg:  `));
let altura = parseFloat(prompt(`Digite a altura em metros: `));
let condicao = '';
const imc = peso / (altura ** 2);

  if (imc < 18.5) {
    condicao = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    condicao = 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    condicao = 'Acima do peso';
  } else if (imc >= 30 && imc < 40) {
    condicao = 'Obeso';
  } else {
    condicao = 'Obesidade Grave';
  }

console.log(`Seu IMC é: ${imc.toFixed(2)}`);
console.log(`Condição: ${condicao}`);
*/

//Running on node.js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o peso em kg: ', (peso) => {
  rl.question('Digite a altura em metros: ', (altura) => {
    const imc = peso / (altura ** 2);

    let condicao = '';

    if (imc < 18.5) {
      condicao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      condicao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      condicao = 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
      condicao = 'Obeso';
    } else {
      condicao = 'Obesidade Grave';
    }

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Condição: ${condicao}`);

    rl.close();
  });
});
