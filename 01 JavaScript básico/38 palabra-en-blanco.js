/*

Palabra en blanco

Se te proporcionan oraciones con algunas palabras faltantes, como sustantivos, verbos, adjetivos y adverbios. Luego, completa las piezas que faltan con palabras de tu elección de una manera que la oración completa tenga sentido.

Considera esta oración: It was really ____, and we ____ ourselves ____. Esta oración tiene tres piezas faltantes: un adjetivo, un verbo y un adverbio, y podemos añadir palabras de nuestra elección para completarla. Luego podemos asignar la oración completa a una variable de la siguiente manera:

const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
En este desafío, te proporcionamos un sustantivo, un verbo, un adjetivo y un adverbio. Necesitas formar una oración completa usando palabras de tu elección, junto con las palabras que te proporcionamos.

Necesitarás usar el operador de concatenación de cadenas + para construir una nueva cadena, usando las variables proporcionadas: myNoun, myAdjective, myVerb, y myAdverb. A continuación, asignarás la cadena formada a la variable wordBlanks. No debes cambiar las palabras asignadas a las variables.

También tendrás que tener en cuenta los espacios en tu cadena, para que la frase final tenga espacios entre todas las palabras. El resultado debe ser una oración completa.

*/

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Cambia solo el código debajo de esta línea
const wordBlanks = "My " + myNoun + " is " + myAdjective + " and " + myVerb + " " + myAdverb + ".";  // Cambia esta línea
// Cambia solo el código encima de esta línea