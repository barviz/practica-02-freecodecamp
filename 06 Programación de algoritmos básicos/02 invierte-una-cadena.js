/*

Invierte una cadena

Invertir la cadena proporcionada y devolver la cadena invertida.

Por ejemplo, "hello" debe convertirse "olleh".

*/

function reverseString(str) {

  let stringInvertido = str.split("");
  str = "";

  for (let i = stringInvertido.length - 1; i >= 0; i--){
    str += stringInvertido[i];
  }

  return str;
}

reverseString("hello");