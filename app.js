let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let intentosMaximos = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        intentos++;
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        if (intentos >= intentosMaximos) {
            asignarTextoElemento('p', `Lo siento, no lo has logrado. El número era ${numeroSecreto}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            limpiarCaja();
        }
    }
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;



    if (listaNumerosSorteados.length === numeroMaximo) {
        listaNumerosSorteados = [];
        console.log("¡Se han sorteado todos los números! Reiniciando lista...");
    }

    while (listaNumerosSorteados.includes(numeroGenerado)) {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    }

    listaNumerosSorteados.push(numeroGenerado);
    console.log("Lista de números sorteados:", listaNumerosSorteados);
    return numeroGenerado;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', '!Juego del número secreto!');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
    console.log("Número secreto:", numeroSecreto);

}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
