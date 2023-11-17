// array normal:
const prices: (number | string)[] = [1,3,2,2,2, 'as'];
prices.push(1);
prices.push('1');

let user: [string, number, boolean];
// user = ['mariana', 12]; Error
user = ['mariana', 24, true];

const [username, age] = user;
console.log(username);
console.log(age);

//Permiten crear un array fuertemente tipado especificando el tipo de dato de cada elemento, así como la cantidad de elementos que podrá almacenar.
