// Mariana  => [M, a, r, i, a, n, a]
//[M, a, r, i, a, n, a] => Mariana

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
//export function parseStr(input: number): boolean;

// export function parseStr( input: unknown ) : unknown {
//   if (Array.isArray(input)) {
//     return input.join('');        //string
//   } else if (typeof input === 'string'){
//     return input.split('');     //string[]
//   } else if (typeof input === 'number') {
//     return true;
//   }
// }

export function parseStr( input: string | string[] ) : string | string[] {
  if (Array.isArray(input)) {
    return input.join('');        //string
  } else {
    return input.split('');     //string[]
  }
}

const rtaArray = parseStr('Mariana')
rtaArray.reverse();
console.log('rtaArray', 'Mariana =>', rtaArray);

const rtaStr = parseStr(['M','a','r','i','a','n','a'])
rtaStr.toUpperCase();
console.log('rtaStr', "['M','a','r','i','a','n','a'] =>", rtaStr);

