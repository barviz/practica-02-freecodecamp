/*

Devuelve los números mayores en los arreglos

Devuelve un arreglo que consista en el mayor número de cada sub-arreglo proporcionado. Por simplicidad, el arreglo dado contendrá exactamente 4 sub-arreglos.

Recuerda, puedes iterar a través de un arreglo utilizando un simple bucle for, y acceder a cada miembro del arreglo con la sintaxis arr[i].

*/

function largestOfFour(arr) {

   let arrMayor = [];

   for (let i = 0; i < arr.length; i++) {

      let subArr = arr[i];
      let mayorNumero = -99999;

      for (let j = 0; j < subArr.length; j++) {

         if (subArr[j] > mayorNumero) {
            mayorNumero = subArr[j];
         }
      }

      arrMayor.push(mayorNumero);
   }

   return arrMayor;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);