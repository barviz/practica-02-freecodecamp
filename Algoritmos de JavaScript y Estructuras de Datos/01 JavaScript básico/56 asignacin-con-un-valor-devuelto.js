/*

Asignación con un valor devuelto

Si recuerda nuestra discusión sobre el almacenamiento de valores con el operador de asignación, todo lo que está a la derecha del signo de igualdad se resuelve antes de asignar el valor. Esto significa que podemos tomar el valor devuelto de una función y asignarlo a una variable.

Supongamos que hemos predefinido una función sum que suma dos números juntos, entonces:

ourSum = sum(5, 12);
llamará a la función sum, que devuelve un valor de 17 y lo asigna a la variable ourSum.

Llama la función processArg con un argumento de 7 y asigna su valor de retorno a la variable processed.

*/

// Configuración
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Cambia solo el código debajo de esta línea
processed = processArg(7);