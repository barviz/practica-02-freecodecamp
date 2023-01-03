/*

Caja registradora

Diseña una función checkCashRegister() que acepte el precio de compra como primer argumento (price), la cantidad pagada como segundo argumento (cash), y el dinero en efectivo que tiene la caja (cid) como tercer argumento.

cid es un arreglo 2D que enumera las monedas disponibles.

La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.

Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio necesario, o si no puedes devolver el cambio exacto.

Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar.

En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.

Unidad Monetaria	Importe
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
A continuación, un ejemplo del efectivo en caja en formato de arreglo:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

*/

function checkCashRegister(price, cash, cid) {

  let dif = cash - price;
  let difInicial = dif;
  let salida = {
    status: '',
    change: []
  }

  let arr = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ];

  cid.reverse();

  let cidSum = 0;

  for (let i = 0; i < cid.length; i++) {
    cidSum += cid[i][1];
  }



  let resultado = [...arr];

  for (let i = 0; i < arr.length; i++) {

    let efectM = 0;
    let efectB = cid[i][1] / arr[i][1]
    efectB.toFixed(2);

    while (dif.toFixed(2) >= arr[i][1] && efectB >= 1) {

      dif -= arr[i][1];
      efectM += arr[i][1];
      efectB--;

    }
    if (efectM > 0) {

      if (efectM - Math.floor(efectM) !== 0) {
        resultado[i][1] = efectM.toFixed(2)
        resultado[i][1] = parseFloat(resultado[i][1])
      } else {
        resultado[i][1] = efectM;
      }

    } else {
      resultado[i][1] = efectM;
    }
  }

  let sumatoria = 0;

  for (let i = 0; i < cid.length; i++) {
    sumatoria += resultado[i][1];
  }

  sumatoria = sumatoria.toFixed(2);


  cid.reverse();

  if (cidSum < difInicial || sumatoria < difInicial) {
    salida.status = 'INSUFFICIENT_FUNDS';

  } else if (cidSum == difInicial) {
    salida.status = 'CLOSED';
    salida.change = cid;

  } else {
    let resFilt = [];

    for (let a = 0; a < resultado.length; a++) {

      if (resultado[a][1] !== 0) {
        resFilt.push(resultado[a]);
      }
    }
    salida.status = 'OPEN';
    salida.change = resFilt;
  }

  return salida;

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);