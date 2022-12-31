/*

Haz coincidir los números y las letras del alfabeto

Usar el guión (-) para coincidir con un rango de caracteres no está limitado a letras. También funciona para hacer coincidir un rango de números.

Por ejemplo, /[0-5]/ coincide con cualquier número entre 0 y 5, incluyendo 0 y 5.

Además, es posible combinar un rango de letras y números en un único conjunto de caracteres.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
Crea una sola expresión regular que coincida con un rango de letras entre h y s, y un rango de números entre 2 y 6. Recuerda incluir las banderas apropiadas en la expresión regular.

*/

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Cambia esta línea
let result = quoteSample.match(myRegex); // Cambia esta línea