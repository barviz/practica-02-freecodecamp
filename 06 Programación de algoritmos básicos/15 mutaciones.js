/*

Mutaciones

Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

Por ejemplo, ["hello", "Hello"], debe devolver true porque todas las letras de la segunda cadena están presentes en la primera, ignorando mayúsculas o minúsculas.

Los argumentos ["hello", "hey"] deben devolver false porque la cadena hello no contiene y.

Finalmente, ["Alien", "line"], debe devolver true porque todas las letras de line están presentes en Alien.

*/

function mutation(arr) {

  let elem1 = arr[1].toLowerCase();
  let elem2 = arr[0].toLowerCase();

  for (let i = 0; i < elem1.length; i++) {

    if (elem2.indexOf(elem1[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);