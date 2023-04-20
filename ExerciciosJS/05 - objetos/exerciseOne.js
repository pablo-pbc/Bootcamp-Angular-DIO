/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
 */

class Car {
    brand;
    color;
    valueSpentPerKm;

    constructor(brand, color, valueSpentPerKm){
        this.brand = brand;
        this.color = color;
        this.valueSpentPerKm = valueSpentPerKm;
    }

    toCalcValueSpent (km, fuelPrice) {
        let finalPrice = (1 / this.valueSpentPerKm) * km * fuelPrice;

        console.log(`Modelo do carro: ${this.brand}`);
        console.log(`Cor carro: ${this.color}`);
        console.log(`Consumo médio de combustível por kilômetro: ${this.valueSpentPerKm}km/L`);
        console.log(`Gasto final considerando um percusso de ${km}km e combustível custando R$${fuelPrice}: ${finalPrice.toFixed(2)}`);
    }
}

const car1 = new Car('Onix', 'Branco', 10);
const car2 = new Car('Saveiro', 'Vermelho', 5);

car1.toCalcValueSpent(100, 5.5.toFixed(2));
console.log('');
car2.toCalcValueSpent(100, 5.5.toFixed(2));