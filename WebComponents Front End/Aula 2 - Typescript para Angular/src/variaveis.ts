/*Variaveis e suas tipagens em TS*/

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "felipe";
let idade: number = 30;
let altura: number = 1.9;

// tipos especiais null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void; //retorna vazio
let retornoView: any = false; // Recebe qualquer tipo de variavel

//objeto - sem previsibilidade
let produto: object = {
  name: "felipe",
  cidade: "sp",
  idade: 30,
};

//objeto tipado (structure)- com previsibilidade
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

//variavel objeto "herdando" as tipagens do objeto ProdutoLoja
let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.99,
  unidades: 5,
};

/*Arrays*/
let dados: string[] = ["felipe", "ana", "adriana"]; //Lista de string declaração 1
let dados2: Array<string> = ["felipe", "ana", "adriana"]; //Lista de string declaração 2
let infos: (string | number)[] = [322, "felipe"]; // Lista de string e numeros

/*Tuplas*/
let boleto: [string, number, number] = ["agua conta", 199.9, 32342342];

/*Arrays métodos (são os mesmos do Javascript)*/
dados.pop();

/*Datas*/
let aniversario: Date = new Date();
console.log(aniversario.toString());
