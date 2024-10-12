const botones = document.querySelectorAll(".btn");
const pantalla = document.querySelector (".pantalla");

botones.forEach(boton =>{
    boton.addEventListener("click", ()=>{
        const botonApretado = boton.textConten;
        pantalla.textContent = botonApretado;
    });
})