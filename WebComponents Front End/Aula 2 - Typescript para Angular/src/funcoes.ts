//funções
//Função com variaveis e retorno tipado em number
function addNumber(x: number, y: number): number {
    return x + y;
}
let soma: number = addNumber(4, 7);

//Função com variaveis e retorno tipado em string
function addToHello(name: string): string {
    return `Hello ${name}`;
}
let nomeHello: string = addToHello('Pablo');

//Função com variaveis e retorno tipado em string ou number
function CallToPhone(phone: number | string): number | string {
    return phone;
}
let phoneNumber: number | string = CallToPhone(11951206429)
let phoneString: number | string = CallToPhone('11951206429')

//Função assincrona que aguarda um retorno/promise em string
async function getDatabase(id: number): Promise<string> {
    return "felipe";
}
let promise: Promise<string> = getDatabase(1);


console.log(soma);
console.log(nomeHello);
console.log(phoneNumber);
console.log(phoneString);
console.log(promise);
