/*

Comprendiendo las variables no inicializadas
Cuando las variables de JavaScript son declaradas, tienen un valor inicial de undefined (indefinido). Si haces una operación matemática en una variable undefined, tu resultado será NaN lo que significa "Not a Number" (no es un número). Si concatenas una cadena con una variable undefined, obtendrás una cadena de undefined.

Inicializa las tres variables a, b, y c con 5, 10 y "I am a" respectivamente para que no sean undefined.

*/

// Cambia solo el código debajo de esta línea
var a = 5;
var b = 10;
var c = "I am a";
// Cambia solo el código encima de esta línea

a = a + 1;
b = b + 5;
c = c + " String!";