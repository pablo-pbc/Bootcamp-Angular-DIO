function writeName(name) {
    return (`Meu nome é ${name}`);
};


function writeAge(age) {
    if (age < 18) {
        console.log(`${writeName('Pablo')} e tenho ${age} anos de idade, logo sou menor de idade`);
    } else {
        console.log(`${writeName('Renan')} e tenho ${age} anos de idade, logo sou maior de idade`);
    };
};

writeAge(15);
writeAge(18);