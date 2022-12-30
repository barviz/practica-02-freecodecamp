/*

Utiliza la notación de corchetes para encontrar el primer carácter en una cadena
La notación de corchetes es una forma de obtener un carácter en un índice (index) específico dentro de una cadena.

La mayoría de lenguajes de programación modernos, como JavaScript, no empiezan a contar desde 1 como lo hacen los humanos. Empiezan desde 0. Esto se conoce como indexación basada en cero.

Por ejemplo, el carácter en el índice 0 de la palabra Charles es C. Así que si declaramos const firstName = "Charles", puedes obtener el valor de la primera letra de la cadena usando firstName[0].

Ejemplo:

const firstName = "Charles";
const firstLetter = firstName[0];
firstLetter tendrá una cadena con valor C.

Utiliza notación de corchetes para encontrar el primer carácter en la variable lastName y asígnalo a firstLetterOfLastName.

Sugerencia: Intenta mirar el ejemplo de arriba si te quedas atascado.

*/

// Configuración
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Cambia solo el código debajo de esta línea
firstLetterOfLastName = lastName[0]; // Cambia esta línea