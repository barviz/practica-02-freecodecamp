/*

Convierte entidades HTML

Convierte los caracteres &, <, >, " (dobles comillas), y ' (apóstrofo), en un cadena con su correspondiente entidad HTML.

*/

function convertHTML(str) {
  
  let newStr = str.split("");

  for (let i = 0; i < newStr.length; i++) {

    switch (newStr[i]) {

      case "<":
        newStr[i] = "&lt;";
        break;
      case "&":
        newStr[i] = "&amp;";
        break;
      case ">":
        newStr[i] = "&gt;";
        break;
      case '"':
        newStr[i] = "&quot;";
        break;
      case "'":
        newStr[i] = "&apos;";
        break;
    }
    
  }

  return newStr.join("");

}

convertHTML("Dolce & Gabbana");