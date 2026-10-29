
"use strict";

// Estado inicial del contador
let clicks = 0;

// Referencias a los elementos HTML
const contador = document.getElementById("contador");
const mensaje = document.getElementById("mensaje");
const botonSumar = document.getElementById("botonSumar");
const botonRestar = document.getElementById("botonRestar");
const botonReiniciar = document.getElementById("botonReiniciar");
const tituloEvento = document.getElementById("tituloEvento");
const tituloVisible = document.getElementById("tituloVisible");

// Actualizar el número y el mensaje
function actualizarContador() {
    contador.textContent = clicks;

    if (clicks === 0) {
        mensaje.textContent = "¡Listos para comenzar!";
    } else if (clicks === 1) {
        mensaje.textContent = "¡Se ha registrado 1 click!";
    } else {
        mensaje.textContent = `¡Se han registrado ${clicks} clicks!`;
    }
}

// Animar el número al cambiar
function animarContador() {
    contador.classList.remove("animar");

    // Permite repetir la animación en clicks consecutivos
    void contador.offsetWidth;

    contador.classList.add("animar");
}

// Cambiar el título en tiempo real
tituloEvento.addEventListener("input", function () {
    const nuevoTitulo = tituloEvento.value.trim();

    tituloVisible.textContent = nuevoTitulo || "Nombre del evento";

    document.title = nuevoTitulo
        ? `${nuevoTitulo} | Contador de Eventos`
        : "Contador de Eventos | Colegio Bolívar";
});

// Registrar un click
botonSumar.addEventListener("click", function () {
    clicks++;
    actualizarContador();
    animarContador();
});

// Restar un click sin permitir valores negativos
botonRestar.addEventListener("click", function () {
    if (clicks > 0) {
        clicks--;
        actualizarContador();
        animarContador();
    } else {
        mensaje.textContent = "El contador no puede ser negativo.";
    }
});

// Reiniciar el contador a cero
botonReiniciar.addEventListener("click", function () {
    clicks = 0;
    actualizarContador();
    animarContador();

    mensaje.textContent = "Contador reiniciado a cero.";
});

// Inicializar la interfaz
actualizarContador();
