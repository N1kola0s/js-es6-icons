/* Snack 4:
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */


//Dichiaro una variabile con la lista di oggetti che sono le persone con nome,cognome ed età
const persone = [{
    nome: 'Erika',
    cognome: 'Merola',
    età: 16
},
{
    nome: 'Francesca',
    cognome: 'Mele',
    età: 10
},
{
    nome: 'Giovanni',
    cognome: 'Conte',
    età: 36
}];

//dihiaro una variabile e con il metodo filter estrapolo la lita delle persone aventi età >=18 anni
const patentati = persone.filter((persona) => {

    if (persona.età >= 18){
        
        return true
        
    }

    return false

});

/* console.log(patentati) */


//dihiaro una variabile e con il metodo forEach stampo un messaggio per la persona che può guidare
patentati.forEach ((persona) =>{

    console.log(`${persona.nome} ${persona.cognome} può guidare`)
});

//dichiaro una variabile con le persone minorenni e che quindi non hanno la patente

const nonpatentati = persone.filter((persona) => {

    if (persona.età <= 18){
        
        return true
        
    }

    return false

});

//utilizzo il metodo forEach per stampare un messaggio ad un elemento del mio array che comunichi chi non può guidare

nonpatentati.forEach ((persona) =>{

    console.log(`${persona.nome} ${persona.cognome} non può guidare`)
});
