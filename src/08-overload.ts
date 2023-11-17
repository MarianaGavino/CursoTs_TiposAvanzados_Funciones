// Mariana  => [M, a, r, i, a, n, a]
//[M, a, r, i, a, n, a] => Mariana

function parseStr( input: string | string[] ) : string | string[] {
  if (Array.isArray(input)) {
    return input.join('');        //string
  } else {
    return input.split('');     //string[]
  }
}



const rtaArray = parseStr('Mariana')
console.log('rtaArray', 'Mariana =>', rtaArray);

const rtaStr = parseStr(['M','a','r','i','a','n','a'])
// rtaStr.toLowerCase()  // Da error porque ts no sabe que tipo de dato es, solo sabe que puede ser string o array
console.log('rtaStr', "['M','a','r','i','a','n','a'] =>", rtaStr);

