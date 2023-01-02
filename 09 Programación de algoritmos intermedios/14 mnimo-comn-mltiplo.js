/*

Mínimo común múltiplo

Encuentra el múltiplo común más pequeño de los parámetros proporcionados que pueden dividirse equitativamente por ambos, así como por todos los números consecutivos del rango entre estos parámetros.

El rango será un arreglo de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se dan 1 y 3, encuentra el múltiplo común más pequeño de 1 y 3 que también es dividido por todos los números entre 1 y 3. La respuesta sería 6.

*/

function smallestCommons(arr) {

  let [min, max] = arr.sort((a, b) => a - b);
  let numDiv = max - min + 1;
  let limitMax = 1;

  for (let i = min; i <= max; i++) {
    limitMax *= i;
  }

  for (let multiple = max; multiple <= limitMax; multiple += max) {

    let numDivs = 0;

    for (let i = min; i <= max; i++) {

      if (multiple % i === 0) {
        numDivs += 1;
      }
    }
    if (numDivs === numDiv) {
      return multiple;
    }

  }

}

smallestCommons([1, 5]);