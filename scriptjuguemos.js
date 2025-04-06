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