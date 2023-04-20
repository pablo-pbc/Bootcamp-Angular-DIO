/*
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/
const score = [2, 7, 3, 8, 10, 4];
let maxIndexValue = score[0];

for(let i = 0; i < score.length; i++){
  if(score[i] > maxIndexValue){
    maxIndexValue = score[i];
  }
}

console.log("A maior nota é: " + maxIndexValue);
