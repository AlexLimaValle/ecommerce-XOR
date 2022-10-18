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

const $stockLaptop = document.querySelector(".contenedor__laptop");

const $fragmento = document.createDocumentFragment();

function recorrerArray(array){
    array.forEach((e)=>{
        const $laptop = document.createElement("DIV");
        $laptop.innerHTML = `
        <div class="contenedor__laptopMarca">
            <img src="" alt="asus 245g8" class="contenedor__marcaImg">
        </div>
        <div class="contenedor__laptopPantalla">
            <img src="" alt="pantalla" class="contenedor__pantallaImg">
        </div>
        <div class="contenedor__laptopImagen">
            <img src="./img/laptop/hp/${e.modelo}.jpg" alt="imagen" class="contenedor__laptopImg">
        </div>
        <h4 class="contenedor__laptopTitulo">${e.nombre}</h4>
        <div class="contenedor__laptopComponentes">
            <p class="contenedor__laptopComponente">${e.disco}</p>
            <p class="contenedor__laptopComponente">${e.pantalla}</p>
            <p class="contenedor__laptopComponente">${e.ram}</p>
            <p class="contenedor__laptopComponente">${e.procesador}</p>
            <p class="contenedor__laptopComponente">${e.grafico}</p>
            <p class="contenedor__laptopComponente">${e.sistemaOperativo}</p>
        </div>
        <div class="contenedor__precios">
            <p class="contenedor__precio">${e.precio}</p>
        </div>
        <button class="contenedor__boton">Comprar</button>
        `;
        $fragmento.appendChild($laptop);        
    })
}

recorrerArray(stock);

$stockLaptop.appendChild($fragmento);
