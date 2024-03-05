/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 20;
let number2 = 30;
let majorNumber;

if (number1 > number2) {
  majorNumber = number1;
  console.log("Il numero maggiore è: " + majorNumber);
} else if (number1 === number2) {
  console.log("I due numeri inserito sono uguali");
} else {
  majorNumber = number2;
  console.log("Il numero maggiore è: " + majorNumber);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let randomNumber = 35;

if (randomNumber !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (randomNumber % 5 === 0) {
  console.log(randomNumber + " è divisibile per 5.");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (
  number1 === 8 ||
  number2 === 8 ||
  number1 - number2 === 8 ||
  number2 - number1 === 8
) {
  console.log("La condizione si è verificata!");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 50;
const shippingCost = 10;
let checkOut;

if (totalShoppingCart > 50) {
  checkOut = totalShoppingCart;
  console.log("This is your total expense: " + checkOut);
} else {
  checkOut = totalShoppingCart + shippingCost;
  console.log("This is your total expense: " + checkOut);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let discount;
totalShoppingCart = 50;

if (totalShoppingCart > 50) {
  discount = (totalShoppingCart / 100) * 20;
  checkOut = totalShoppingCart - discount;
  console.log("This is your total expense: " + checkOut);
} else {
  discount = (totalShoppingCart / 100) * 20;
  checkOut = totalShoppingCart - discount + shippingCost;
  console.log("This is your total expense: " + checkOut);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let randomNumber1 = 10;
let randomNumber2 = 20;
let randomNumber3 = 30;

let highNumber;
let middleNumber;
let smallNumber;

const arrayOfRandomNumber = [];

if (randomNumber1 >= randomNumber2) {
  highNumber = randomNumber1;
  smallNumber = randomNumber2;
  if (randomNumber1 >= randomNumber3) {
    if (randomNumber3 >= randomNumber2) {
      middleNumber = randomNumber3;
    } else {
      middleNumber = randomNumber2;
      smallNumber = randomNumber3;
    }
  } else {
    highNumber = randomNumber3;
    middleNumber = randomNumber1;
  }
} else {
  highNumber = randomNumber2;
  smallNumber = randomNumber1;
  if (randomNumber2 >= randomNumber3) {
    if (randomNumber3 >= randomNumber1) {
      middleNumber = randomNumber3;
    } else {
      middleNumber = randomNumber1;
      smallNumber = randomNumber3;
    }
  } else {
    highNumber = randomNumber3;
    middleNumber = randomNumber2;
  }
}

arrayOfRandomNumber.push(highNumber, middleNumber, smallNumber);

console.log(
  "Questo è il numero più grande: " +
    highNumber +
    " " +
    "questo è il numero intermedio: " +
    middleNumber +
    " " +
    "questo è il numero più piccolo: " +
    smallNumber
);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let randomValue = "Alessio";
let randomValue = 10;

let type = typeof randomValue;

if (type === "number") {
  console.log("Il valore inserito è un numero.");
} else {
  console.log("Il valore inserito è: " + type);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let rNumber = 17;
// rNumber = 10;

if (rNumber % 2 === 0) {
  console.log(rNumber + " è un numero pari");
} else {
  console.log(rNumber + " è un numero dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
// val = 4;
// val = 12;

if (val < 10) {
  if (val < 5) {
    console.log(val + " è minore di 5");
  } else {
    console.log(val + " è compreso tra 9 e 6");
  }
} else {
  console.log(val + " è uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";

console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();

console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const randomArray = [];

randomArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(randomArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

randomArray.splice(randomArray.length - 1, 1, 100);

console.log(randomArray);
