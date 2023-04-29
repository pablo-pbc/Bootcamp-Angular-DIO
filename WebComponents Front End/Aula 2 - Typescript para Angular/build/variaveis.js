"use strict";
/*Variaveis e suas tipagens em TS*/
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "felipe";
let idade = 30;
let altura = 1.9;
// tipos especiais null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno; //retorna vazio
let retornoView = false; // Recebe qualquer tipo de variavel
//objeto - sem previsibilidade
let produto = {
    name: "felipe",
    cidade: "sp",
    idade: 30,
};
//variavel objeto "herdando" as tipagens do objeto ProdutoLoja
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};
/*Arrays*/
let dados = ["felipe", "ana", "adriana"]; //Lista de string declaração 1
let dados2 = ["felipe", "ana", "adriana"]; //Lista de string declaração 2
let infos = [322, "felipe"]; // Lista de string e numeros
/*Tuplas*/
let boleto = ["agua conta", 199.9, 32342342];
/*Arrays métodos (são os mesmos do Javascript)*/
dados.pop();
/*Datas*/
let aniversario = new Date();
console.log(aniversario.toString());
