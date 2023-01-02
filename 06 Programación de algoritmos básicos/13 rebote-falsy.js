/*

Rebote falsy

Elimina todos los valores falsos de un arreglo. Devuelve un nuevo arreglo; no alteres el arreglo original.

Los valores falsos en JavaScript son false, null, 0, "", undefined y NaN.

Sugerencia: Intenta convertir cada valor a booleano.

*/

function bouncer(arr) {

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

bouncer([7, "ate", "", false, 9]);