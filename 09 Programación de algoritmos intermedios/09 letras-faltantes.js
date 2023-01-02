/*

Letras faltantes

Encuentra la letra que falta en la siguiente cadena de letras y devuélvela.

Si todas las letras están presentes en la cadena, devuelve undefined.

*/

function fearNotLetter(str) {

  let abcedario = "abcdefghijklmnopqrstuvwxyz";
  let prim = str[0];
  let primIndex = abcedario.indexOf(prim);
  let dif = primIndex;

  for (let i = 1; i < str.length; i++){

    let letraFalt = abcedario[i + dif];

    if (str[i] != letraFalt){
      return letraFalt;
    }
    
  }

  return undefined;
}

fearNotLetter("abce");