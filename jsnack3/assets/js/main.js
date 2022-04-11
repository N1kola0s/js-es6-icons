/* Snack 3:
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi. */


//creo una costante con la lista di animali aventi determinate proprietà 
const animali = [{
    nome: 'leone',
    famiglia: 'felidi',
    classe: 'mammiferi'
},
{
    nome: 'cane',
    famiglia: 'canidi',
    classe: 'mammiferi'
},
{
    nome: 'gallina',
    famiglia: 'fasianidi',
    classe: 'uccelli'
},
{
    nome: 'gatto',
    famiglia: 'felidi',
    classe: 'mammiferi'
},
{
    nome: 'piccione',
    famiglia: 'columbidi',
    classe: 'uccelli'
}];


//creo una variabile in cui con il metodo filter prenderò la lista dei mammiferi dall'array precedente
const mammiferi = animali.filter ((animale) => {

    if (animale.classe === 'mammiferi'){
        return true;
    }
    return false;
});

//stampo in console la lista degli animali
console.log(animali);

//stampo in console la lista dei mammiferi
console.log(mammiferi);