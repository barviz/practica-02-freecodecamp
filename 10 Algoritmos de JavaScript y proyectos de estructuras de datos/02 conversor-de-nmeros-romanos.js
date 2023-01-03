/*

Conversor de números romanos

Convierte el número proporcionado en un número romano.

Números romanos	Números arábigos

M	  1000
CM	900
D	  500
CD	400
C	  100
XC	90
L	  50
XL	40
X	  10
IX	9
V	  5
IV	4
I	  1

Todas las respuestas de los números romanos deben ser proporcionadas en mayúsculas.

*/

function convertToRoman(num) {

  let arrArabico = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let arrRomano = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let numConvertidoRomano = '';

  for (let i = 0; i < arrArabico.length; i++) {

    while (num >= arrArabico[i]) {
      numConvertidoRomano += arrRomano[i];
      num -= arrArabico[i];
    }

  }

  return numConvertidoRomano;

}

convertToRoman(36);