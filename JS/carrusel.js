// CARRUSEL JS
const btnDerecha = document.querySelector(".btn-left"),
      btnIzquierda = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderDiv = document.querySelectorAll(".slider-div");

btnDerecha.addEventListener("click",e => moverIzquierda())
btnIzquierda.addEventListener("click",e => moverDerecha())

let operacion = 0 ,
    contador = 0,
    widthImg = 100 / sliderDiv.length;

setInterval(() => {
    moverDerecha()
},6000);

function moverDerecha(){
    if (contador >=(sliderDiv.length-1)){
        operacion = 0;
        contador = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    }
    contador ++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";

}

function moverIzquierda(){
    contador--;
    if(contador < 0){
        contador = sliderDiv.length-1;
        operacion = widthImg * (sliderDiv.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        return;
    }
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";   
}

// Menu hamburguesa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const carrusel = document.getElementById("container-carrusel");
abrir.addEventListener("click", () =>{
    nav.classList.add('visible');
    carrusel.classList.add('active');
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
    carrusel.classList.remove('active');
})
