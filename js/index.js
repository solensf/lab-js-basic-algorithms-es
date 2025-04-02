console.log('¡Estoy listo!');

// Interacción 1: Nombres y entradas

let hacker1 = 'AARON';

console.log('El nombre del conductor es ' + hacker1);

let hacker2 = 'Raul';

console.log('El nombre del navegante es ' + hacker2);

// Interacción 2: Condicionales

let hacker1Lenght = hacker1.length;
let hacker2Lenght = hacker2.length;

if (hacker1Lenght > hacker2Lenght) {
  console.log(
    'El conductor tiene el nombre más largo, tiene ' +
      hacker1Lenght +
      ' caracteres'
  );
} else if (hacker2Lenght > hacker1Lenght) {
  console.log(
    'Parece que el navegante tiene el nombre más largo, tiene ' +
      hacker2Lenght +
      ' caracteres'
  );
} else if ((hacker1Lenght = hacker2Lenght)) {
  console.log(
    '¡Vaya, ambos tienen nombres igual de largos, ' +
      hacker1Lenght +
      ' caracteres!'
  );
}

// Interacción 3: Loops 3.1 Imprime todos los caracteres del nombre del conductor, separados por un espacio y en mayúsculas, por ejemplo "J O H N"
// El método charAt() se utiliza para acceder a los caracteres individuales de una cadena. Este método toma el índice como argumento y devuelve el carácter del índice dado en la cadena

console.log(hacker1.charAt(0));
console.log(hacker1.toUpperCase());

let hacker1Upper = hacker1.toUpperCase();

for (let i = 0; i < hacker1Upper.length; i++) {
  console.log(hacker1Upper.charAt(i));
}

console.log(
  hacker1Upper.charAt(0) +
    ' ' +
    hacker1Upper.charAt(1) +
    ' ' +
    hacker1Upper.charAt(2) +
    ' ' +
    hacker1Upper.charAt(3) +
    ' ' +
    hacker1Upper.charAt(4) +
    ' ' +
    hacker1Upper.charAt(5)
);

// 3.2 Imprima todos los caracteres del nombre del navegador, en orden inverso.es decir, " nhoJ"
// El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.

var hacker1Array = [
  hacker1.charAt(0),
  hacker1.charAt(1),
  hacker1.charAt(2),
  hacker1.charAt(3),
  hacker1.charAt(4),
  hacker1.charAt(5),
];
const hacker1Reversed = hacker1Array.reverse();
console.log(hacker1Reversed);

// for ([expresiónInicial];
// [expresiónCondicional];
// [expresiónDeActualización])

for (let i = hacker1.length; i >= 0; i--) {
  console.log(hacker1.charAt(i));
}
// 3.3 Según el orden lexicográfico de las cadenas, imprime:

// El nombre del conductor va primero.
// Yo, el navegador va primero definitivamente.
// ¿Qué? ¿Los dos tienen el mismo nombre?

let OrdenLexicográfico = [hacker1, hacker2];
console.log(OrdenLexicográfico.sort());

// if (hacker1.charAt(0)<hacker2.charAt(0)) {
//   console.log( "El nombre del conductor va primero.")
// } else if(hacker1.charAt(0)>hacker2.charAt(0)) {
//   console.log( "Yo, el navegador va primero definitivamente.")
// } else if(hacker1.charAt(0)===hacker2.charAt(0)) {
//   console.log( "¿Qué? ¿Los dos tienen el mismo nombre?")
// };

// operador ternario (? :) para comparar las longitudes de las dos variables.
// let shortestName= hacker1.length < hacker2.length ? hacker1 : hacker2;
// Como NO lo hemos visto, busco alternativa

let shortestName;

if (hacker1.length < hacker2.length) {
  shortestName = hacker1;
} else {
  shortestName = hacker2;
}

for (let i = 0; i < shortestName.length; i++) {
  if (hacker1.charAt(i) < hacker2.charAt(i)) {
    console.log('El nombre del conductor va primero.');
    break;
  } else if (hacker1.charAt(i) > hacker2.charAt(i)) {
    console.log('Yo, el navegador va primero definitivamente.');
    break;
  }
}
if (hacker1 === hacker2) {
  console.log('¿Qué? ¿Los dos tienen el mismo nombre?');
}

// Bono 1:

// Generar 3 párrafos. Guarda el texto en una variable de tipo cadena.
let parrafos =
  'ed rem rem ut perspiciatis rem unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';

// Haz que tu programa cuente el número de palabras de la cadena.
let count1 = parrafos.split(' ').length;
console.log(' El texto tiene ' + count1 + ' palabras.');
// Como el ejercicio está preparado para hacer uso de bucles,
// seguimos con otra opción, he encontrado esta funcion en internet
// pero no he sido capaz de replicarla aunque no parece dar error:

function WordCount(str) {
  let totalSoFar = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      totalSoFar += 1;
    }
    totalSoFar += 1;
  }
  return totalSoFar;
}
console.log(WordCount(''));

/* iterar sobre un string carácter a carácter 
y comparar si ese carácter es un espacio, así usas loops:)*/

let contador = 1;

for (let i = 0; i < parrafos.length; i++) {
  if (parrafos[i] === ' ') {
    contador++;
  }
}
console.log(contador);

/* Haz que tu programa cuente el número de veces que aparece
la palabra latina rem*/

let regex = /rem/g;
let found = parrafos.match(regex);
console.log(found);

/* iterar sobre un string carácter a carácter 
y comparar si ese carácter es rem*/

let palabraLatina = 0;

for (let i = 0; i < parrafos.length; i++) {
  if (parrafos.substring(i, i + 3) === 'rem') {
    palabraLatina++;
  }
}
console.log(palabraLatina);

/* Bono 2:
 código que compruebe si el valor que asignamos
  a esta variable es un palíndromo. */

let phraseToCheck = 'oi io';
let phraseToCheckLow = phraseToCheck.toLowerCase();
let longitud = phraseToCheck.length;
let Palindromo = false;

for (let i = 0; i < longitud / 2; i++) {
  if (phraseToCheckLow[i] === phraseToCheckLow[longitud - 1 - i]) {
    continue;
  } else if (phraseToCheckLow[i] !== phraseToCheckLow[longitud - 1 - i]) {
    console.log('no es palindromo');
    break;
  }
  console.log("si es un palindromo")
}
