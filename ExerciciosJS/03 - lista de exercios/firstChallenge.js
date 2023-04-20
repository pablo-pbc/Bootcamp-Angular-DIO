/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

//Running on browser
/*
let firstGrade = parseInt(prompt('Digite a nota da primeira atividade: '));
let secondGrade = parseInt(prompt('Digite a nota da segunda atividade: '));
let thirdGrade = parseInt(prompt('Digite a nota da terceira atividade: '));
let finalGrade = (firstGrade + secondGrade + thirdGrade)/3

if (finalGrade < 5) {
    console.log(`A nota média do aluno foi de: ${finalGrade.toFixed(2)}`)
    console.log(`Situação: Reprovado!`)
} else if (finalGrade > 5 && finalGrade < 7) {
    console.log(`A nota média do aluno foi de: ${finalGrade.toFixed(2)}`)
    console.log(`Situação: Recuperação!`)
} else {
    console.log(`A nota média do aluno foi de: ${finalGrade.toFixed(2)}`)
    console.log(`Situação: Aprovado!`)
} 
*/

//Running on node.js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a nota da primeira atividade: ', (firstGrade) => {
  rl.question('Digite a nota da segunda atividade: ', (secondGrade) => {
    rl.question('Digite a nota da terceira atividade: ', (thirdGrade) => {
      let finalGrade = (parseInt(firstGrade) + parseInt(secondGrade) + parseInt(thirdGrade)) / 3;

      if (finalGrade < 5) {
        console.log(`A nota média do aluno foi de: ${finalGrade.toFixed(2)}`)
        console.log(`Situação: Reprovado!`)
      } else if (finalGrade >= 5 && finalGrade < 7) {
        console.log(`A nota média do aluno foi de: ${finalGrade.toFixed(2)}`)
        console.log(`Situação: Recuperação!`)
      } else {
        console.log(`A nota média do aluno foi de: ${finalGrade.toFixed(2)}`)
        console.log(`Situação: Aprovado!`)
      }

      rl.close();
    });
  });
});