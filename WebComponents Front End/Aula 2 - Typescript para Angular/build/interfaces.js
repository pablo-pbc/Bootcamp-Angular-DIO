"use strict";
//variavel que herda de robot
const bot1 = {
    id: "1",
    name: "megaman"
};
console.log(bot1.name);
console.log(bot1.name = 'pablo');
;
//variavel que herda de robot 2
const bot2 = {
    id: "1",
    name: "megaman",
    //Metodo
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot2.name);
console.log(bot2.name = 'pablo');
/*******************************************************************/
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
