function estaDentroPantalla(elemento) {
    const rect = elemento.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right > 0
    );
}
/*
* pagina historia scroll para animacion nav y divs
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
    const tarjetas = document.querySelectorAll(".tarjeta-historia>img");
    tarjetas.forEach((tarjeta, key) => {      
            if (estaDentroPantalla(tarjeta)) {
            switch (key) {
                case 0:
                    document.querySelector("#tarjeta1>.tarjeta-historia-texto").classList.add("tarjeta1-texto");
                    document.querySelector("#tarjeta1>img").classList.add("tarjeta1-img");
                    break;
                case 1:
                    document.querySelector("#tarjeta2>.tarjeta-historia-texto").classList.add("tarjeta2-texto");
                    document.querySelector("#tarjeta2>img").classList.add("tarjeta2-img");
                    break;
                case 2:
                    document.querySelector("#tarjeta3>.tarjeta-historia-texto").classList.add("tarjeta1-texto");
                    document.querySelector("#tarjeta3>img").classList.add("tarjeta1-img");
                    break;                     
                default:
                    break;
            }
        }
    });
 
});
/* */
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
    video.pause();
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
