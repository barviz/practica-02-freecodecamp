/*

Aplanadora

Aplana un arreglo anidado. Debes tener en cuenta los diferentes niveles de anidación.

*/

function steamrollArray(arr) {

  const arrPlano = [];

  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {
      arrPlano.push(...steamrollArray(arr[i]));
    } else {
      arrPlano.push(arr[i]);
    }

  }

  return arrPlano;

};



steamrollArray([1, [2], [3, [[4]]]]);