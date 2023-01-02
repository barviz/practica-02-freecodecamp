/*

Suma todos los números en un rango

Te pasaremos un arreglo de dos números. Devuelve la suma de estos dos números más la suma de todos los números entre ellos. El número más bajo no siempre será el primero.

Por ejemplo, sumAll([4,1])> debe devolver 10 porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10.

*/

function sumAll(arr) {
  
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  
  return sum;
  
}

sumAll([1, 4]);