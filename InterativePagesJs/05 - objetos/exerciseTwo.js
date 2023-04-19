/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
 */

class Person {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    toCalcImc() {
        let imc = this.weight/(this.height*2);
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

        return console.log(`${this.name} seu IMC é de ${imc.toFixed(2)}: ${condicao}`);       
    }
}

const jose = new Person('José', 70, 1.75);
const pablo = new Person('Pablo', 85, 1.69);

console.log(jose);
console.log(jose.toCalcImc());
console.log('');
console.log(pablo);
console.log(pablo.toCalcImc());