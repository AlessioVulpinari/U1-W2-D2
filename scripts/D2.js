/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// inizializzo 3 variabili, alle prime due assegno due valori casuali, alla terza assegno il valore zero
// (per non fare in modo che sia undefined) ma poi la utilizzeremo per salvare il numero maggiore

let number1 = 20;
let number2 = 30;
let majorNumber = 0;

// Controllo se il primo numero è maggiore del secondo, se è così assegno majorNumber a number1
// e lo stampo sul log. Poi controllo sei i due numeri sono uguali, in quel caso utilizzeremo
// un log per dire ll'utente che i due numeri sono identici. Infine se il numero 1 non è maggiore
// del numero 2 e non è uguale del numero 2 significa che il numero 2 è il numero maggiore, quindi
// useremo un log per indicarlo.

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

// Inizializzo una variabile e le assegno un valore.

let randomNumber = 35;
// randomNumber = 12;

// controllo se il valore assegnato è DIVERSO da 5, se questa affermazione risulta TRUE
// stampo sul log la fras "not equal"
if (randomNumber !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//randomNumber = 12;

// utilizzo operatore modulo per controllare se il numero è divisibile per 5,
// se il risultato del modulo è uguale a zero significa che il numero è divisibile
// perciò stamperà un messaggio sul log.
if (randomNumber % 5 === 0) {
  console.log(randomNumber + " è divisibile per 5.");
} else {
  console.log(randomNumber + " non è divisibile per 5.");
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

// inizializzo 2 variabili la prima è il saldo del carello e la seconda è saldo
// al checkout. Poi inizializzo una costante alla quale assegno il costo fisso della spedizione.
let totalShoppingCart = 50;
const shippingCost = 10;
let checkOut;

// controllo se il saldo nel carello è maggiore di 50$. Nel caso in cui lo fosse il saldo al check out
// sarà uguale a quello del carello, in caso contrario dovremmo aggiungere al costo del carello
// anche i costi di spedizione fissi.
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

// inizializzo una variabile per salvarmi successivamente il valore dello sconto
let discount;
totalShoppingCart = 50;

// rispetto all'esercizio precedente l'unica cosa aggiunta è il calcolo dello sconto che viene calcolato solo sul prezzo dei prodotti.
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

// Inizializzo 3 variabili per salvarmi 3 numeri interi.
let randomNumber1 = 10;
let randomNumber2 = 20;
let randomNumber3 = 30;

// Inizializzo 3 variabili che mi serviranno successivamente per salvarmi,
// il numero maggiore, quello minore e quello intermedio.
let highNumber;
let middleNumber;
let smallNumber;

// Inizializzo un array vuoto per salvarmi i numeri
const arrayOfRandomNumber = [];

// faccio i check necessari per verificare quale dei 3 numeri sia quello minore,
// quello intermedio e quello minore salvandoli nelle rispettive variabili
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

// Una volta ottenuti li inserisco in un array.
arrayOfRandomNumber.push(highNumber, middleNumber, smallNumber);

// Poi li stampo in ordine decrescente, dal più grande al più piccolo.
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
// Inizializzo una variabile e gli assegno un valore.
let randomValue = 10;

// Salvo in una variabile il TIPO della variabile che ho appena inizializzato.
let type = typeof randomValue;

// Controllo se il tipo della variabile è di tipo numerico e ne stampo il tipo.
if (type === "number") {
  console.log("Il valore inserito è un numero.");
} else {
  console.log("Il valore inserito è: " + type);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Inizializzo una variabile e gli assegno un valore.
let rNumber = 17;
// rNumber = 10;

// Uso l'operatore modulo per verificare se dividendo il numero diviso 2
// si ottenga o meno un resto. Se c'è il resto il numero e pari se non c'è il numero è pari.
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
