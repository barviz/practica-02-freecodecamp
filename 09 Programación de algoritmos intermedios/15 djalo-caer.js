/*

Déjalo caer

Dado el arreglo arr, itera y elimina cada elemento comenzando desde el primer elemento (el índice 0) hasta que la función func devuelva true cuando el elemento iterado se pasa a través de él.

Luego devuelve el resto del arreglo una vez que se cumpla la condición, de lo contrario, arr debe devolverse como un arreglo vacío.

*/

function dropElements(arr, func) {

  let longitudInicial = arr.length;

  for (let i = 0; i < longitudInicial; i++) {

    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }

  }

  return arr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });