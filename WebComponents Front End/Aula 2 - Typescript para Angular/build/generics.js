"use strict";
//generics
//notação do T para que possamos deixar o tipo de variavel na lista generico e possibilitar a tipagem dele no momento da atribuição numa variavel.
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["felipe", "goku"], ["vegeta"]);
console.log(numArray);
console.log(stgArray);
