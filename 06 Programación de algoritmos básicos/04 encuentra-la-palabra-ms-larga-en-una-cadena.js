/*

Encuentra la palabra más larga en una cadena

Devuelve la longitud de la palabra más larga en la oración proporcionada.

Tu respuesta debe ser un número.

*/

function findLongestWordLength(str) {

  var mayorLongitud = 0;
  const palabras = str.split(" ");

  for (let i = 0; i < palabras.length; i++) {
    var palabra = palabras[i];
    var longitudPalabra = palabra.length;

    if (longitudPalabra > mayorLongitud) {
      mayorLongitud = longitudPalabra;
    }
  }

  return mayorLongitud;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");