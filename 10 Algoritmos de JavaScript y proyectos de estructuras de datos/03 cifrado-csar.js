/*

Cifrado César

Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.

Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.

Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.

Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos.

*/

const arrCesar = {
  "A": "N",
  "B": "O",
  "C": "P",
  "D": "Q",
  "E": "R",
  "F": "S",
  "G": "T",
  "H": "U",
  "I": "V",
  "J": "W",
  "K": "X",
  "L": "Y",
  "M": "Z",
  "N": "A",
  "O": "B",
  "P": "C",
  "Q": "D",
  "R": "E",
  "S": "F",
  "T": "G",
  "U": "H",
  "V": "I",
  "W": "J",
  "X": "K",
  "Y": "L",
  "Z": "M",
};

function rot13(str) {

  let subStr = str.split("");
  let newStr = [];

  newStr = subStr.map(function (letra) {

    if (arrCesar.hasOwnProperty(letra)) {
      letra = arrCesar[letra];
    }
    return letra;

  });

  return newStr.join("");
}

rot13("SERR PBQR PNZC");