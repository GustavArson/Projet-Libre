var audio = document.createElement('audio');
var first = true;
window.addEventListener('mousedown', onmousedown);

function onmousedown() {
    if (!first) return;
    first = false;
    audio.src = "audio/ayaya.mp3";
    audio.volume = 0.5
    audio.play();
}