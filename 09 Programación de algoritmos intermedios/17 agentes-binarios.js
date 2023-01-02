/*

Agentes binarios

Devuelve una frase traducida al inglés de una cadena binaria pasada.

La cadena binaria estará separada por espacios

*/

function binaryAgent(str) {

  let elements = str.split(" ");
  let newStr = [];

  for (let i = 0; i < elements.length; i++) {
    newStr.push(String.fromCharCode(parseInt(elements[i], 2)));

  }

  return newStr.join("");

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");