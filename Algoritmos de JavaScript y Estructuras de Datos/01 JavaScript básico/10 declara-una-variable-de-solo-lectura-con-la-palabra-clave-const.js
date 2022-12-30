/*

Declara una variable de solo lectura con la palabra clave const
La palabra clave let no es la única manera nueva de declarar variables. En ES6, tú también puedes declarar variables usando la palabra clave const.

const tiene todas las características increíbles que tiene let, con el bono añadido de que las variables declaradas usando const son de solo lectura. Son un valor constante, lo que significa que una vez que una variable es asignada con const, no se puede reasignar:

const FAV_PET = "Cats";
FAV_PET = "Dogs";
La consola mostrará un error debido a la reasignación del valor de FAV_PET.

Siempre debes nombrar variables que no quieras reasignar usando la palabra clave const. Esto ayuda cuando intentas reasignar accidentalmente una variable que está destinada a permanecer constante.

Nota: Es común que los desarrolladores usen identificadores de variables en mayúsculas para valores inmutables y minúsculas o camelCase para valores mutables (objetos y arreglos). Aprenderás más sobre objetos, arreglos y valores inmutables y mutables en desafíos posteriores. También en desafíos posteriores, verás ejemplos de identificadores de variables mayúsculas, minúsculas o camelCase.

Cambia el código para que todas las variables se declaren con let o const. Usa let cuando quieras que la variable cambie y const cuando quieras que la variable permanezca constante. Además, renombra variables declaradas con const para adaptarse a las prácticas comunes. No debes cambiar las palabras asignadas a las variables.

*/

const FCC = "freeCodeCamp"; // Cambia esta línea
let fact = "is cool!"; // Cambia esta línea
fact = "is awesome!";
console.log(FCC, fact); // Cambia esta línea