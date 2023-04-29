//interfaces (type x interface)
//INTERFACE gera um tipo de "contrato" então é necessários a implementação dos atributos que a interface possui
type robot = {
    readonly id: number | string; //Atributo para apenas leitura
    name: string;
};
//variavel que herda de robot
const bot1: robot = {
    id: "1",
    name: "megaman"
};
console.log(bot1.name);
console.log(bot1.name = 'pablo');

/*******************************************************************/

interface robot2 {
    readonly id: number | string; //Atributo para apenas leitura
    name: string;
    //Metodo
    sayHello(): string;
};
//variavel que herda de robot 2
const bot2: robot2 = {
    id: "1",
    name: "megaman",
    //Metodo
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};
console.log(bot2.name);
console.log(bot2.name = 'pablo');

/*******************************************************************/

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id : string | number, name : string) {
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
