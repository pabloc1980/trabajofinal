window.addEventListener("scroll", ()=> {
    /**
     * Animacion para nav de paginas
     */
    let scrollY = window.scrollY;
    let nav, tarj1, tarj2;
    nav = document.querySelector("nav");
    tarj1 = document.querySelector("#tarj1");
    tarj2 = document.querySelector("#tarj2");
    if (scrollY > 30) { 
        nav.classList.add("cambiaFondoNav");
    }else{
        nav.classList.remove("cambiaFondoNav");
    }
    /**
     * fin animacion nav de paginas
     */
    /*Animaciones de tarjetas */
    if (scrollY > 250) { 
        tarj1.style = "animation : desdeIzquierda 3s 2s forwards";
        tarj2.style = "animation : desdeDerecha 3s 1s forwards";
    }  
    /*fin animacion de tarjetas*/ 
});

