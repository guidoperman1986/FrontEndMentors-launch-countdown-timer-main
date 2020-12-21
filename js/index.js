
var fechaHoy = new Date();
var ano = fechaHoy.getFullYear();

var fechaTope = ano + '-12-31';

var fechaTopeTotal = new Date(fechaTope);

/* console.log("fecha hoy: "+fechaHoy);
console.log("fecha hoy: "+fechaHoy.getTime());

console.log("fecha tope: "+fechaTopeTotal);
console.log("fecha tope: "+fechaTopeTotal.getTime()); */

var diference = Math.abs(fechaTopeTotal - fechaHoy);

const diffDays = Math.ceil(diference / (1000 * 60 * 60 * 24));

document.querySelector('#days').innerHTML = diffDays-1;

//horas
var horas = new Date().getHours();
horas = 24 - horas; //horas faltantes

//minutos
var minutos = new Date().getMinutes();
minutos = 60 - minutos; //minutos faltantes

//segundos
var seconds = new Date().getSeconds();



var controlLaunch = () => {
    
    seconds--;    
    if (seconds === 0){
        seconds = 59;
        minutos--;        
    }

    if (minutos === 0){
        minutos = 59;
        horas--;
    }

    if (horas === 0){
        diffDays--;
    }

    document.querySelector('#horas').innerHTML =  horas;
    document.querySelector('#minutos').innerHTML = minutos;
    document.querySelector('#seconds').innerHTML = seconds;
}

setInterval(()=>controlLaunch(),1000);










