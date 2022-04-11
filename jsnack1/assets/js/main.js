const automobili = [{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'benzina'
},
{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'gpl'
},
{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'benzina'
},
{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'gpl'
},
{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'diesel'
},
{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'benzina'
},
{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'diesel'
},
{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'metano'
},
{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'diesel'
},
{
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'elettrica'
},
];


//stampo lista di oggetti con le automobili con le sue proprietà e valori

console.log (automobili);

//imposto il metodo filter alla mia lista automibili in modo che mi restituisca una lista di automobili la cui alimentazione è uaugale a benzina

const benzina = automobili.filter ((automobile) => {

    if (automobile.alimentazione === 'benzina'){
        return true;
    }


    return false;

});

//stampo in console la lista delle auto con alimentazione a benzina
console.log (benzina);

//imposto il metodo filter alla mia lista automibili in modo che mi restituisca una lista di automobili la cui alimentazione è uaugale a diesel

const diesel = automobili.filter ((automobile) => {


    if(automobile.alimentazione === 'diesel'){
        return true;
    }

    return false;
})

//stampo in console la lista delle auto con alimentazione a diesel
console.log (diesel);

//imposto il metodo filter alla mia lista automibili in modo che mi restituisca una lista di automobili la cui alimentazioni è diversa da benzina e diesel

const others = automobili.filter ((automobile) => {


    if (automobile.alimentazione !== 'benzina' && automobile.alimentazione !== 'diesel'){

        return true;

    }

    return false;
})

//stampo in console la lista delle auto con i restanti tipi di alimentazione
console.log (others);





