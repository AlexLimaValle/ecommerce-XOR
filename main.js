const $bars = document.querySelector(".nav__bars");
const $navBars = document.querySelector(".nav__navbar");


$bars.addEventListener("click",()=>{
    $navBars.classList.toggle("nav__active");
})

const $left = document.querySelector(".header__left");
const $right = document.querySelector(".header__right");
const $sliders = document.querySelector(".header__sliders");
const $carrusel = document.querySelector(".header__carrusel")


const recorrer = $carrusel.clientWidth;//1366px
const tamanioFinal = recorrer * 2; // 2732px
let posicion = 0;

$right.addEventListener("click",()=>{
    if(posicion < tamanioFinal){
        $sliders.style.transform = `translateX(-${posicion+=recorrer}px)`;
    }else{
        while(posicion > 0){
            $sliders.style.transform = `translateX(-${posicion-=recorrer}px)`
        }
    }
})

$left.addEventListener("click",()=>{
    if(posicion <= 0){
        posicion = tamanioFinal;
        $sliders.style.transform = `translateX(-${posicion}px)`;
    }else if(posicion <= tamanioFinal){
        $sliders.style.transform = `translateX(-${posicion-=recorrer}px)`;
    }
})


// seccion 1:
const $mark = document.querySelector(".contenedor__mark");

window.addEventListener("scroll",()=>{
    $mark.classList.remove("contenedor__markActive");
})

//stock:


