/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/
 
/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
- NUMERI
Possono essere interi o decimali. Per esempio:
let num1 = 40
let num2 = 40.71 

- STRINGHE
Una stringa è una sequenza di uno o più caratteri (lettere, numeri, simboli).
Esistono tra virgolette singole ' o doppie " per esempio :
let stringa1 = 'questa è una stringa'
let stringa2 = "questa è un'altra stringa"

- BOOLEANI
Il tipo di dati booleano può essere vero o falso, rappresenta un valore di -verità- Per esempio :
let esempio1 = 5 > 3 // false
let esempio2 = 3 > 5 // true

- ARRAY
Un array può contenere più valori (elementi) all'interno di una singola variabile.
Sono definite con valori tra parentesi quadre [ ] ognuno dei quali è racchiuso tra virgolette e separato dalla virgola :
let settimana : ['lunedì , 'martedì , 'mercoledi' , 'giovedì' , 'venerdì' , 'sabato', 'domenica']

- OGGETTI
Può contenere molti valori come coppie nome:valore (name:value). La sintassi è composta da coppie nome:valori separate da due punti con parentesi graffe su entrambi i lati { }.
let me = { 
name: 'antonella' , 
surname: 'morelli' , 
age: '26' , 
eyeColor: 'brown' }


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
/*Possiamo definire un oggetto come un contenitore di proprietà, cioè di elementi caratterizzati da un nome ed un valore.

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let num1 = 12
let num2 = 20
let sum = num1 + num2
console.log (sum) 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'Antonella'

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let num4 = 4
let subtract = num4 - x
console.log (subtract)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = 'john'
let name2 = 'John'
console.log (name1 !== name2)
console.log (name1.toLowerCase() === name2.toLowerCase() )
