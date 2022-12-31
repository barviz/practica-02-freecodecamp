/*

Elimina espacio en blanco del inicio y final

A veces no se quieren caracteres en espacios en blanco alrededor de las cadenas, pero están ahí. El proceso típico de las cadenas de texto es eliminar el espacio en blanco al inicio y al final del mismo.

Escribe una expresión regular y usa los métodos de cadena apropiados para eliminar espacios en blanco al principio y al final de las cadenas.

Nota: El método String.prototype.trim() funcionará aquí, pero necesitarás completar este desafío usando expresiones regulares.

*/

let hello = "   Hello, World!  ";
let wsRegex = /(\s+)(Hello, World!)(\s+)/; // Cambia esta línea
let result = hello.replace(wsRegex, "$2"); // Cambia esta línea