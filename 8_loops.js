console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = true;
const destino = "Salvador";

console.log("Destinos possíveis:");
console.log(listaDeDestinos);


const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true);

let contador = -1
let existe = false;
while(++contador < listaDeDestinos.length){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe >> " + listaDeDestinos[contador]);
        existe = true;
        break;
    }
}
if(!existe) console.log("Destino não existe");

if(podeComprar && existe){
    console.log("Boa viagem! =)");
}else{
    console.log("Desculpe, tivemos um problema.");
}


// if (podeComprar) {
//     console.log("Boa Viagem!!");
//     listaDeDestinos.splice(2, 1); //removendo item
//     temPassagemComprada = true;
// } else {
//     console.log("Não é maior de Idade e não posso vender");
//     temPassagemComprada = false;
// }

// console.log("Embarque: \n\n")
// if(idadeComprador >= 18 && temPassagemComprada){
//     console.log("Boa viagem");
// }else{
//     console.log("Você não pode embarcar");
// }


// console.log(listaDeDestinos);