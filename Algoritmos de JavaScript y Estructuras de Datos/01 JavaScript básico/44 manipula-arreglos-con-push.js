/*

Manipula arreglos con push()

Una forma fácil de añadir datos al final de un arreglo es a través de la función push().

.push() toma uno o más parámetros y los "empuja" al final del arreglo.

Ejemplos:

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
arr1 ahora tiene el valor [1, 2, 3, 4] y arr2 tiene el valor ["Stimpson", "J", "cat", ["happy", "joy"]].

Empuja ["dog", 3] al final de la variable myArray.

*/

// Configuración
const myArray = [["John", 23], ["cat", 2]];

// Cambia solo el código debajo de esta línea
myArray.push(["dog", 3]);