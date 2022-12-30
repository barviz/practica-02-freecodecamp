/*

Manipula arreglos con unshift()

No solo puedes desplazar (shift) elementos del comienzo de un arreglo, también puedes des-desplazar (unshift) elementos al comienzo de un arreglo. Por ejemplo añadir elementos delante del arreglo.

.unshift() funciona exactamente como .push(), pero en lugar de añadir el elemento al final del arreglo, unshift() añade el elemento al principio del arreglo.

Ejemplo:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
Después del shift, ourArray tendrá el valor ["J", "cat"]. Después del unshift, ourArray tendrá el valor ["Happy", "J", "cat"].

Agrega ["Paul", 35] al principio de la variable myArray usando unshift().

*/

// Configuración
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Cambia solo el código debajo de esta línea
myArray.unshift(["Paul", 35]);