const withoutEnd = () :number => { // Infiere que la función es de tipo never
	while (true) {
		console.log('Nunca parar de aprender');
	}
}

type User1 = {
  id: number,
  name: string,
  email: string,
  status?: boolean,
}

const user1: User1 = {
  id: 1,
  name: 'mariana',
  email: 'example@example',
}

const fail = ( message: string ) => { // TypeScript infiere que esta función se de tipo `never`
  throw new Error(message)
}

const example = ( input: unknown ) => {
  if(typeof input === 'string'){
    return 'Es un string';
  }
  else if (Array.isArray(input)){
    return 'Es un array';
  }
  return fail('Not Match'); // Lanzamos un error
}

console.log(example('Hola')) //'Es un string'
console.log(example([1,1,1,1])) // 'Es un array'
console.log(example(1212)) // error: Uncaught Error: Not Match
console.log(example('Hola después del fail')) // NUNCA SE EJECUTA, porque se lanzó un error previamente
