nome = 'bom dia';
console.log(nome);
const num1 = 1;
const num2 = 2;
const num3 = 3;
console.log(num1,num2,num3);
let frase = 'olá seja bem-vindo ao javaScript!';
console.log(frase);

// let x = 5;
// let dia = (x>1 && x<4) ? 'Bom dia' : 'Madrugada';
// console.log(dia);

let x=8;

if (x>=2 && x<4){
    console.log('estou bem!');
}
else if (x>=4 && x<8){
    console.log('estou muito bem!');
}
else{
    console.log('estou ótimo !_!');
} 

let permissao = 'colaborador';

switch (permissao){
    case 'comum':
    console.log('legal');
    break;

    case 'gerente':
    console.log('ótimo');
    break;

    case 'diretor':
    console.log('parabéns');
    break;

    default:
    console.log('continue tentando !_!');
}