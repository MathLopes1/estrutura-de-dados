
let Paises = [];

Paises.push('Brasil');
Paises.push('França');
Paises.push('Portugal');

let PaisesI = (value, index, array) => {
    console.log(value, index, array)
}

Paises.forEach(PaisesI)

/*--------------------------------------------------------*/

const SocialNetwork = ['Twitter', 'Facebook', 'Orkut', 'Instagram'];

const Itens = (item, index)=>{
 console.log(`item ${item} tem o index ${index}`)
}

console.log(SocialNetwork.forEach(Itens));

/*----------------------------------------------------------*/

let names = ['maria', 'joão', 'francisco', 'tiago']
const func = (item, index) =>{
    names[index] = names[index].toUpperCase();
}

names.forEach(func)
console.log(names);

/*------------------------------------------------------------*/

const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const funcTableTwo = (item, index) => table[index] = table[index]*2;

table.forEach(funcTableTwo)
console.log(table)
