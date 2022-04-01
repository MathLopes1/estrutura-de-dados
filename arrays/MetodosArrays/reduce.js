var numeros = [0, 1, 2, 3, 4, 5, 6];

var total = numeros.reduce((acumulador, numero, indice) => {
console.info(`${acumulador} total até o momento`);
console.log(`${numero} valor atual`);
console.log(`${indice} indice atual`);
return acumulador += numero;
}, 0)

console.warn('acaboooou');
console.log(total)

/*-------------------------------------------------------------------*/

const soma = [2000, 2000, 2000, 2000, 2000]

let Imprimir = soma.reduce((acc, numbers)=> acc + numbers, 0)
console.log(Imprimir)

/*--------------------------------------------------------------------*/