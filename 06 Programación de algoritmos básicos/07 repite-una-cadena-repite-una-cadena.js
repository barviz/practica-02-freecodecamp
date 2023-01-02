/*

Repite una cadena repite una cadena

Repite una cadena dada str (primer argumento) por un número (num) de veces (segundo argumento). Devuelve una cadena vacía si num no es un número positivo. Para este desafío, no utilices el método incorporado .repeat().



*/

function repeatStringNumTimes(str, num) {

  if (num <= 0) {
    return "";
  } else {

    let cadenaRepeat = "";
    for (let i = 0; i < num; i++) {
      cadenaRepeat += str;
    }
    return cadenaRepeat;
  }

}

repeatStringNumTimes("abc", 3);