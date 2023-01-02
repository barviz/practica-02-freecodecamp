/*

Busca y reemplaza

Realiza una búsqueda y reemplaza en la oración usando los argumentos proporcionados y devuelve la nueva oración.

El primer argumento es la frase sobre la que se va a realizar la búsqueda y el reemplazo.

El segundo argumento es la palabra que se reemplazará (antes).

El tercer argumento es lo que reemplazará el segundo argumento (después).

Note: Mantén la capitalización del primer carácter en la palabra original cuando lo estés reemplazando. Por ejemplo, si quieres reemplazar la palabra Book por la palabra dog, debe ser reemplazada como Dog

*/

function myReplace(str, before, after) {

  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }

  else {
    after = after[0].toLowerCase() + after.slice(1);
  }

  str = str.replace(before, after);
  
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");