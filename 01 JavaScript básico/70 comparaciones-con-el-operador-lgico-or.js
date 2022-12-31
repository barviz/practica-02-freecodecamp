/*

Comparaciones con el operador lógico "or"

El operador lógico or (||) devuelve true si cualquiera de los operandos es true. De lo contrario, devuelve false.

El operador lógico or se compone de dos símbolos de barra vertical: (||). Este se puede encontrar normalmente entre las teclas de tabulación y escape.

El patrón de abajo debería parecer familiar desde los puntos de referencia anteriores:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
devolverá Yes sólo si num está entre 5 y 10 (5 y 10 incluidos). La misma lógica se puede escribir como:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
Combina las dos sentencias if en una sola sentencia que devuelva la cadena Outside si val no está entre 10 y 20, inclusivo. De lo contrario, devuelve la cadena Inside.

*/

function testLogicalOr(val) {
  // Cambia solo el código debajo de esta línea

  if (val > 20 || val < 10) {
    return "Outside";
  }

  // Cambia solo el código encima de esta línea
  return "Inside";
}

testLogicalOr(15);