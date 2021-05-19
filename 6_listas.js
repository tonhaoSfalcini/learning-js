console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;


// console.log(`>> ${salvador}`);
// console.log(`>> ${saoPaulo}`);
// console.log(`>> ${rioDeJaneiro}`);

const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

console.log(`Possíveis destinos:`)
console.log(listaDestinos);

listaDestinos.push( `Curitiba`);
console.log(listaDestinos);

const idade = 29;

if(idade >= 18){
    console.log(`Comprador maior de idade`);
    listaDestinos.splice(1, 1);
    console.log(listaDestinos);
}else{
    console.log(`Comprador menor de idade. Compra negada`);
}