"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//funções
//Função com variaveis e retorno tipado em number
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
//Função com variaveis e retorno tipado em string
function addToHello(name) {
    return `Hello ${name}`;
}
let nomeHello = addToHello('Pablo');
//Função com variaveis e retorno tipado em string ou number
function CallToPhone(phone) {
    return phone;
}
let phoneNumber = CallToPhone(11951206429);
let phoneString = CallToPhone('11951206429');
//Função assincrona que aguarda um retorno/promise em string
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
let promise = getDatabase(1);
console.log(soma);
console.log(nomeHello);
console.log(phoneNumber);
console.log(phoneString);
console.log(promise);
