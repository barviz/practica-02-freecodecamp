/*

Comprende la inmutabilidad de las cadenas

En JavaScript, los valores de cadena (String) son inmutables, lo que significa que no pueden ser alterados una vez creados.

Por ejemplo, el siguiente código producirá un error debido a que la letra B en la cadena Bob no puede ser cambiada por la letra J:

let myStr = "Bob";
myStr[0] = "J";
Nota que esto no significa que myStr no pueda ser reasignado. La única manera de cambiar el valor de myStr seria asignándole un nuevo valor, como en el siguiente ejemplo:

let myStr = "Bob";
myStr = "Job";
Corrige la asignación de myStr para que contenga el valor de cadena Hello World usando el método mostrado en el ejemplo anterior.

*/

// Configuración
let myStr = "Jello World";

// Cambia solo el código debajo de esta línea
myStr = "Hello World"; // Cambia esta línea
// Cambia solo el código encima de esta línea