/*
* pagina historia - animacion nav
*/
window.addEventListener("scroll", ()=> {
    let scrollY = window.scrollY;
    let nav;
    nav = document.querySelector("nav");
    if (scrollY > 30) { 
        nav.classList.add("cambiaFondoNav");
    }else{
        nav.classList.remove("cambiaFondoNav");
    }
});
/* fin animacion nav de paginas */
/**
 *  botones video
 */
const video = document.querySelector('.contenedor-video video');
const tiempoVideo = document.querySelector('#tiempo-video');
let botonPlay = document.querySelector("#play-video");
let botonPause = document.querySelector("#pause-video");

botonPlay.addEventListener("click", ()=>{ 
    video.play();
});

botonPause.addEventListener("click",()=>{
    video.pause()
});

// Formatear el tiempo en minutos y segundos (mm:ss)
function formatearTiempo(segundos) {
    let minutos = Math.floor(segundos / 60);
    let segundosRestantesTotal = Math.floor(segundos % 60);
    let segundosRestantes = ""; 
    if(segundosRestantesTotal < 10){
        segundosRestantes = "0";
    }
    segundosRestantes += segundosRestantesTotal;
    return `${minutos}:${segundosRestantes}`;
}

// Actualizar el tiempo transcurrido y la duracion del video
video.addEventListener('timeupdate', () => {
    const tiempoTranscurrido = video.currentTime; // Tiempo actual del video
    const duracionTotal = video.duration; // Duracion total del video

    // Mostrar el tiempo transcurrido y la duracion total en el <p>
    tiempoVideo.textContent = `${formatearTiempo(tiempoTranscurrido)} / ${formatearTiempo(duracionTotal)}`;
});
