//succo

function succo(mele, arance) {
    const succoDiFrutta = `Succo con ${mele} mele e ${arance} arance`;
    return succoDiFrutta
}
document.getElementById('corretta').innerHTML = succo(4,5);
document.getElementById('sbagliata').innerHTML = succo(6);

//età

function calcolaEta (anni) {
    const eta =`${anni} anni`;
    return eta;

}
document.getElementById('eta').innerHTML += calcolaEta(55);

//anno 

calcolaAnno = (nome, anno) => {
    const annoNascita = `L\'anno di nascita di ${nome} è il ${anno}`;
    return annoNascita;
}
document.getElementById('persona1').innerHTML = calcolaAnno('Anna', 2022 - 30);
document.getElementById('persona2').innerHTML = calcolaAnno('Maria', 2022 - 24);

//funzione con dentro una funzione

function fettine() {
    return function(){
        let fetteMele = 9;
        let fetteArancia = 15;

        document.getElementById('torta').innerHTML = `Torta con ${fetteMele}
        fette di mela e ${fetteArancia} fette di arancia`;
    }
}
let aFette = fettine();
aFette();


//form
var btn = document.getElementById('calcola')

btn.addEventListener('click', function() {
let uno = Number(document.getElementById('cibo').value);
let due = Number(document.getElementById('detersivi').value);
let tre = Number(document.getElementById('abiti').value);

let tot = uno + due + tre;
document.getElementById('totale').innerHTML += tot; 

}); 