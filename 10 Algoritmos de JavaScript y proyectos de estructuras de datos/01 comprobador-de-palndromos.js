/*

Comprobador de palíndromos

Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.

Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.

Nota: Tendrás que eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y convertir todo en mayúsculas o minúsculas para comprobar si hay palíndromos.

Pasaremos cadenas con formatos variables, como racecar, RaceCar y race CAR entre otros.

También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2 y 2_A3*3#A2.

*/

function palindrome(str) {

  let newStr = str
    .toLowerCase()
    .match(/[a-z0-9]/g);

  return newStr.join('') ===
    newStr.reverse().join('');
}

palindrome("eye");
palindrome("racecar");
palindrome("RaceCar");
palindrome("raceCAR");
palindrome("2A3*3a2");
palindrome("2A3 3a2");
palindrome("2_A3*3#A2");