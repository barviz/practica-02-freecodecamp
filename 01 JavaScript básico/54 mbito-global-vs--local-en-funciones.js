/*

Ámbito global vs. local en funciones

Es posible tener variables locales y globales con el mismo nombre. Cuando haces esto, la variable local tiene precedencia sobre la variable global.

En este ejemplo:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
La función myFun devolverá la cadena Head porque está presente la versión local de la variable.

Añade una variable local a la función myOutfit para sobrescribir el valor de outerWear con la cadena sweater.

*/

// Configuración
const outerWear = "T-Shirt";

function myOutfit() {
  // Cambia solo el código debajo de esta línea
  let outerWear = "sweater";
  // Cambia solo el código encima de esta línea
  return outerWear;
}

myOutfit();