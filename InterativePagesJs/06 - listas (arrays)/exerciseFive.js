/*
5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/

const average = [2, 7, 3, 8, 10, 4];

for (let index = 0; index < average.length; index++) {    
    if (average[index] < 5) {
        console.log(`Média igual a ${average[index]}: Recuperação`);
    }    
}