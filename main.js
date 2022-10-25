const $bars = document.querySelector(".nav__bars");
const $navBars = document.querySelector(".nav__navbar");
const $shopping = document.querySelector(".nav__shopping");
const $compras = document.querySelector(".header__compras");


$bars.addEventListener("click",()=>{
    $navBars.classList.toggle("nav__active");
})

$shopping.addEventListener("click",()=>{
    $compras.classList.toggle("header__comprasActive");
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
    console.log(window.scrollY)
    $mark.classList.remove("contenedor__markActive");
})

//stock:

const $stockLaptop = document.querySelector(".contenedor__laptops");

const $fragmento = document.createDocumentFragment();

function recorrerArray(array){
    array.forEach((e)=>{
        const $laptop = document.createElement("DIV");
        $laptop.classList.add("contenedor__laptop")
        $laptop.innerHTML = `
        <div class="contenedor__laptopMarca">
            <img src="" alt="asus 245g8" class="contenedor__marcaImg">
        </div>
        <div class="contenedor__laptopPantalla">
            <img src="" alt="pantalla" class="contenedor__pantallaImg">
        </div>
        <div class="contenedor__laptopImagen">
            <img src="./img/laptop/${e.marca}/${e.modelo}.png" alt="imagen" class="contenedor__laptopImg">
        </div>
        <h4 class="contenedor__laptopTitulo">${e.nombre}</h4>
        <div class="contenedor__laptopComponentes">
            <div class="contenedor__laptopComponente">
                <img src="./img/Logos/disco.png" class="contenedor__componenteImg" alt="disco">
                <p class="contenedor__componenteParrafo">${e.disco}</p>
            </div>
            <div class="contenedor__laptopComponente">
                <img src="./img/Logos/pantalla.png" class="contenedor__componenteImg" alt="disco">
                <p class="contenedor__componenteParrafo">${e.pantalla}</p>
            </div>
            <div class="contenedor__laptopComponente">
                <img src="./img/Logos/ram.png" class="contenedor__componenteImg" alt="disco">
                <p class="contenedor__componenteParrafo">${e.ram}</p>
            </div>
            <div class="contenedor__laptopComponente">
                <img src="./img/Logos/procesador.png" class="contenedor__componenteImg" alt="disco">
                <p class="contenedor__componenteParrafo">${e.procesador}</p>
            </div>
            <div class="contenedor__laptopComponente">
                <img src="./img/Logos/grafico.png" class="contenedor__componenteImg" alt="disco">
                <p class="contenedor__componenteParrafo">${e.grafico}</p>
            </div>
            <div class="contenedor__laptopComponente">
                <img src="./img/Logos/sistema.png" class="contenedor__componenteImg" alt="disco">
                <p class="contenedor__componenteParrafo">${e.sistemaOperativo}</p>
            </div>
        </div>
        <div class="contenedor__precios">
            <p class="contenedor__precio">${e.precio}</p>
        </div>
        <button class="contenedor__boton" id="${e.modelo}">Comprar</button>
        `;
        $fragmento.appendChild($laptop);
    })
}

recorrerArray(stock);

$stockLaptop.appendChild($fragmento);

let carritoDeCompras = [];
const $navProduct = document.querySelector(".nav__product");

stock.forEach((e)=>{
      const $boton = document.getElementById(`${e.modelo}`);
        $boton.addEventListener("click",()=>{
            carritoDeCompras.push(e);
            console.log(carritoDeCompras);
            $navProduct.innerHTML = `${carritoDeCompras.length}`
        }); 
})



const cantidadMarca = (marca)=>{
    let contador = 0;
    for(let i of stock){
        if(i.marca == marca){
            contador+=1;
        }
    }
    return contador;
}
// cantidad de máquinas de una determinada MARCA:
const $cantAcer = document.querySelector(".contenedor__AcerCant");
$cantAcer.innerHTML = `(${cantidadMarca("ACER")})`;

const $cantAsus = document.querySelector(".contenedor__AsusCant");
$cantAsus.innerHTML = `(${cantidadMarca("ASUS")})`;

const $cantDell = document.querySelector(".contenedor__DellCant");
$cantDell.innerHTML = `(${cantidadMarca("DELL")})`;

const $cantMsi = document.querySelector(".contenedor__MsiCant");
$cantMsi.innerHTML = `(${cantidadMarca("MSI")})`;

const $cantLenovo = document.querySelector(".contenedor__LenovoCant");
$cantLenovo.innerHTML = `(${cantidadMarca("LENOVO")})`;

const $cantHp = document.querySelector(".contenedor__HpCant");
$cantHp.innerHTML = `(${cantidadMarca("HP")})`;

// filtros:

const $checks = document.querySelectorAll(".contenedor__check");

/* se debe seleccionar todos los input que tiene el 
nombre de clase llamado: class="contenedor__check", si
todos estos son false, es decir $checks.cheked == false
devuelve el stock, si todos los checked son falsos
*/

const $inputs = document.querySelectorAll(".contenedor__check");
const $inputMarca = document.querySelector(".contenedor__checkMark");
const cantidadImputs = $inputs.length;

$inputMarca.addEventListener("click",(e)=>{
    if(e.target.checked){
        console.log(e.target.value)
    }else{
        console.log("false")
    }
})



/* const controlador = (lista)=>{
    let control = 0;
    
}  */

