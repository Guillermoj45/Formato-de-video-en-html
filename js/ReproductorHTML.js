"use strict";
var video = document.getElementById('video');
var progress = document.getElementById('barprogreso');
// Calcular el porcentaje de progreso
var percentage = video.currentTime / video.duration * 100;

var url2 = "https://cdn.discordapp.com/attachments/1164587855956410368/1171877061485412463/play.png?ex=655e468f&is=654bd18f&hm=e2959d6ebd8efbb6c20afa38baf5efaf8e5377ea3b47b5b50459866315ac9d02&";
var url1 = "https://cdn.discordapp.com/attachments/1164587855956410368/1171893888605225011/pause-circle.512x512.png?ex=655e563b&is=654be13b&hm=cc09d687ba14c7e58014391b8ab6abc67ee1129a78b7026ea1a59318301a2aee&";

var controles = document.getElementById('controles');
var h2 = document.getElementById('titulo');
var video = document.getElementById('video');

video.addEventListener('timeupdate', function () {
    progress.value = video.currentTime;
});

function barrapro(value) {
    video.currentTime = value;
    progress.max = video.duration;
}

// Función para reproducir o pausar el video
function playVid() {
    if (video.paused) {
        video.play();
        document.getElementById("play").src = url1;
    } else {
        video.pause();
        document.getElementById("play").src = url2;
    }
}

// Función para actualizar la barra de progreso
function updateProgress() {

    // Actualizar el valor del rango
    progress.value = percentage;
}

//funcion para añadir o disminuir 10 segundos 
function plus10(value) {
    video.currentTime += value;
    progress.updateProgress;
}

function mostrar() {
    var controles = document.getElementById('controles');
    controles.classList.add('visible');
}

function ocultar() {
    var controles = document.getElementById('controles');
    controles.classList.remove('visible');
}
var maxx = (0);
function max() {
    if (maxx === 0) {
        video.className = 'fullvideo';
        controles.className = 'controlesmax';
        h2.className = 'h2max';
        maxx = (1);
    } else {
        video.className = 'video';
        controles.className = 'controles';
        h2.className = 'h2';
        maxx = (0);
    }
}
