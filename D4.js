/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  let tot = l1 * l2;
  return tot;
};
console.log(area(10, 5));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  let somma = n1 + n2;
  if (somma === n1 + n2) {
    return (somma = somma * 3);
  } else {
    return somma;
  }
};
console.log(crazySum(1, 2));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (x) {
  if (x > 19) {
    return (x - 19) * 3;
  } else {
    return 19 - x;
  }
};
console.log(crazyDiff(20));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(400));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (myName) {
  if (myName.startsWith("EPICODE")) {
    return myName;
  } else {
    return "EPICODE" + myName;
  }
};
console.log(epify("EPICODE T"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num) {
  if (num % 3 === 0 || num % 7 === 0) return true;
  else {
    return false;
  }
};
console.log(check3and7(10));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str) {
  const reversed = str.split("");
  let result = "";
  for (let index = reversed.length - 1; index >= 0; index--) {
    result += reversed[index];
  }
  return result;
};
console.log(reverseString("FERMI"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (string) {
  let newString = string.split(" ");

  for (let i = 0; i < newString.length; i++) {
    newString[i] =
      newString[i].charAt(0).toUpperCase() + newString[i].substring(1);
  }

  return newString.join(" ");
};
console.log(upperFirst("ciao mondo"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (myNameDue) {
  let arrayName = myNameDue.split("");
  arrayName.pop();
  arrayName.shift();
  return arrayName.join("");
};
console.log(cutString("Tiziano"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  n = [
    math.floor(math.random() * 10),
    math.floor(math.random() * 10),
    math.floor(math.random() * 10),
  ];
  return n;
};
console.log(giveMeRandom());
