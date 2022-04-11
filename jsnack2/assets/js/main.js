/* JSNACK2

A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: ['grogu', 'MANDO', 'Luke'] =>  ['Grogu', 'Mando', 'Luke'] */

//dichiaro una variabile con all'interno una lista della spesa
const spesa = ['acqua', 'MELA', 'pane' ];
console.log(spesa);



//utilizzo il metodo map che mi restituisca un nuovo array con le stringhe aventi la prima lettera maiuscola
 const newArray = spesa.map ((string) => {

   return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
});

console.log(newArray);




//utilizzo il metodo map che mi restituisca un nuovo array con stringhe tutte in minuscolo
/* const Lower = spesa.map ((string) => {

    return string.toLowerCase();
})

console.log(Lower);  */

//utilizzo il metodo map che mi restituisca un nuovo array con stringhe aventi la prima lettera in maiuscolo
/* const capitalize = Lower.map ((string) => {

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
})

console.log(capitalize) */


