//Intermediary function
function calcularImc(peso, altura) {
    console.log('O seu índice de massa corporal (IMC) é: '+(peso / Math.pow(altura, 2)).toFixed(2))
    return (peso / Math.pow(altura, 2)).toFixed(2); //Utizando a bibliteca Math e função pow para fazer a exponenciação do valor -> altura^2 = altura * altura
}

//Intermediary function
function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
}

// Main function
function finalResult() {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log('Isso representa que você está: ' + classificarImc(imc));
};

finalResult();
