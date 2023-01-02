/*

Monito Trocitos

Escribe una función que divida un arreglo (primer argumento) en grupos de la longitud size (segundo argumento) y los devuelva como un arreglo bidimensional.

*/

function chunkArrayInGroups(arr, size) {

  let newArray = [];

  while (arr.length > 0) {
    newArray.push(arr.splice(0, size));
  }
  return newArray;

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);