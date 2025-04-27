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

/*
* Juego
*/
const obtieneId = (e)=>{
    let elem = e.target;
   e.dataTransfer.setData("Text",elem.getAttribute("id")); 
}
let cont = 0;
const soltado =(e) => {
    e.preventDefault();
    
    const id = e.dataTransfer.getData('Text');
    const imagen = document.getElementById(id);
    
    if (!imagen){
        return
    }; 
    imagen.style.display = 'none';

    const contenedor = e.target.tagName === "P" ? e.target.parentNode : e.target;
    contenedor.innerHTML = `<img src="${imagen.src}" height="100%" width="100%">`;

    cont++;

    if (cont === 3) {
        const imagenesCorrectas = [
            document.querySelector("#caja1>img").getAttribute("src").split("/").includes("Rompe1.png"),
            document.querySelector("#caja2>img").getAttribute("src").split("/").includes("rompe2.png"),
            document.querySelector("#caja3>img").getAttribute("src").split("/").includes("Rompe3.png")
        ];

        let todasCorrectas = true;
        for (let i = 0; i < imagenesCorrectas.length; i++) {
            if (!imagenesCorrectas[i]) {
                todasCorrectas = false;
                break; 
            }
        }

        document.querySelector(".cajas").style = "transform:scale(1.5); gap:0; border:0";   
        const cajas = document.querySelectorAll(".caja");
        cajas.forEach(caja => caja.style.border = "0");

        if(todasCorrectas){
            setTimeout(() => {
                document.querySelector(".cajas").style = "transform:scale(1); gap:0";
            }, 3000);
            setTimeout(() => {
                document.querySelector(".espacio-titulo").innerHTML = `<span>Felicitaciones!!<br>Puzzle correctamente resuelto</span>`;
                document.querySelector(".espacio-titulo").style = "animation:resultado 3s forwards; position:relative";
                document.querySelector(".cajas").style = "opacity:0; gap:0";
            }, 6000);
        }
        else{
            const cajas = document.querySelectorAll(".caja");
            cajas.forEach(caja => {
                caja.style.border = "0";
            });
            setTimeout(() => {
                cajas.forEach(caja => {
                    caja.style.opacity = "0.7";
                });
                document.querySelector(".espacio-titulo").innerHTML = `Lo sentimos, Puzzle no resuelto.<br>Prueba otra vez`;
                document.querySelector(".espacio-titulo").style = "animation:resultado 3s forwards; z-index:3; position:relative; color:white; text-shadow: 2px 2px #808080, 6px 6px black";
                document.querySelector(".cajas").style = "background-color:#000000; transform:scale(1); gap:0";
            }, 5000);
        }
    }
}

const juego = ()=>{
    let imagenes = document.querySelectorAll(".imgRompe");
    imagenes.forEach(imagen => {
        imagen.addEventListener("dragstart", obtieneId);
    });

    let cajas = document.querySelectorAll('.cajas .caja');
    cajas.forEach(caja => {
        caja.addEventListener("dragover", (event) => {
            event.preventDefault(); 
        });
        caja.addEventListener("dragenter",(event)=>{
            event.preventDefault();
        });
        caja.addEventListener("drop", soltado);
    });

}

const botReinicio = document.querySelector(".boton-reinicio");
botReinicio.addEventListener("click",()=>{
    window.location.reload();
});

juego();