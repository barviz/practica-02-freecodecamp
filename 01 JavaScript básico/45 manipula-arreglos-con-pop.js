/*

Manipula arreglos con pop()

Otra manera de cambiar los datos en un arreglo es con la función .pop().

.pop() se utiliza para sacar un valor del final de un arreglo. Podemos almacenar este valor sacado asignándolo a una variable. En otras palabras, .pop() elimina el último elemento de un arreglo y devuelve ese elemento.

Cualquier tipo de entrada puede ser sacada de un arreglo: números, cadenas, incluso arreglos anidados.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
El primer console.log mostrará el valor 6 y el segundo mostrará el valor [1, 4].

Utiliza la función .pop() para eliminar el último elemento de myArray, y asigna el valor sacado a un variable nuevo removedFromMyArray.



*/

// Configuración
const myArray = [["John", 23], ["cat", 2]];

// Cambia solo el código debajo de esta línea
const removedFromMyArray = myArray.pop();