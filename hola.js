"use strict"

let max = 11
let min = 1
let intentos = 0
let numero = Math.random()*(max - min) + min;
numero = parseInt(numero)
console.log(numero)

while(intentos < 3){
    let resultado = prompt("Ingresa un numero")
    resultado = parseInt(resultado)

    intentos = intentos + 1

    if(resultado == numero){
        alert(`Has ganado en ${intentos} intentos`)
        break
    }
    
    else if(resultado < numero){
        alert("Uy, el numero es muy pequeño")
    }
    
    else if(resultado > numero){
        alert("Uy, el numero es muy grande")
    }
    
    if(intentos == 3){
        alert(`Has perdido, el numero que estaba pensando era ${numero}`)
    }
}

