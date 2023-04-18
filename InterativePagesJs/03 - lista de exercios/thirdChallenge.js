
/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

//Running on browser
/*
let price = parseInt(prompt(`Digite o valor do produto: `));
let code = prompt(`Digite o código da condição de pagamento (1 - à vista débito, 2 - à vista dinheiro ou PIX, 3 - em duas vezes, 4 - acima de duas vezes): `);
let finalValue = 0;

switch (code) {
  case '1':
    finalValue = price * 0.9;
    console.log(`Valor a ser pago à vista no débito: R$ ${finalValue.toFixed(2)}`);
    break;
  case '2':
    finalValue = price * 0.85;
    console.log(`Valor a ser pago à vista no dinheiro ou PIX: R$ ${finalValue.toFixed(2)}`);
    break;
  case '3':
    finalValue = price;
    console.log(`Valor a ser pago em duas vezes: 2x de R$ ${finalValue/2}`);
    break;
  case '4':
    finalValue = price * 1.1;
    console.log(`Valor a ser pago acima de duas vezes: R$ ${finalValue.toFixed(2)}`);
    break;
  default:
    console.log('Código inválido.');
};
*/

//Running on node.js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o preço normal de etiqueta: ', (preco) => {
  rl.question('Digite o código da condição de pagamento (1 - à vista débito, 2 - à vista dinheiro ou PIX, 3 - em duas vezes, 4 - acima de duas vezes): ', (codigo) => {
    let valorFinal = 0;

    switch (codigo) {
      case '1':
        valorFinal = preco * 0.9;
        console.log(`Valor a ser pago à vista no débito: R$ ${valorFinal.toFixed(2)}`);
        break;
      case '2':
        valorFinal = preco * 0.85;
        console.log(`Valor a ser pago à vista no dinheiro ou PIX: R$ ${valorFinal.toFixed(2)}`);
        break;
      case '3':
        valorFinal = preco;
        console.log(`Valor a ser pago em duas vezes: 2x de R$ ${valorFinal/2}`);
        break;
      case '4':
        valorFinal = preco * 1.1;
        console.log(`Valor a ser pago acima de duas vezes: R$ ${valorFinal.toFixed(2)}`);
        break;
      default:
        console.log('Código inválido.');
    }

    rl.close();
  });
});
