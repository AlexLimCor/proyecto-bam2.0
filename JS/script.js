// MENU HAMBURGUESA

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const carrusel = document.getElementById("container-carrusel");
abrir.addEventListener("click", () =>{
    nav.classList.add('visible');
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
})


