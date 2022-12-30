/*

Concatena cadenas con el operador "más igual"
También podemos utilizar el operador += para concatenar una cadena al final de una variable de cadena existente. Esto puede ser muy útil para romper una cadena larga en varias líneas.

Nota: Ten cuidado con los espacios. La concatenación no añade espacios entre las cadenas concatenadas, así que tendrás que añadirlos por tu cuenta.

Ejemplo:

let ourStr = "I come first. ";
ourStr += "I come second.";
ourStr ahora tiene un valor de la cadena I come first. I come second..

Construye myStr en varias líneas concatenando estas dos cadenas: This is the first sentence. y This is the second sentence. usando el operador +=. Utiliza el operador += similar a como se muestra en el ejemplo y asegúrate de incluir un espacio entre las dos cadenas. Comienza asignando la primera cadena a myStr, luego añade la segunda cadena.



*/

let myStr = "This is the first sentence.";
myStr += " ";
myStr += "This is the second sentence.";