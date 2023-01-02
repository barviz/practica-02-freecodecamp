/*

Diferencia entre dos arreglos

Compara dos arreglos y devuelve un nuevo arreglo con los elementos que sólo se encuentran en uno de los dos arreglos dados, pero no en ambos. En otras palabras, devuelve la diferencia simétrica de los dos arreglos.

**Nota:**Puedes devolver el arreglo con sus elementos en cualquier orden.

*/

function diffArray(arr1, arr2) {

  return arr1
    .concat(arr2)
    .filter(elem => !arr1.includes(elem) || !arr2.includes(elem));

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);