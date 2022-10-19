class Laptop{

    constructor(nombre,pantalla,modelo,marca,disco,resolucion,procesador,ram,precio,grafico,sistemaOperativo){
        this.nombre = nombre;
        this.pantalla = pantalla;
        this.modelo = modelo;
        this.marca = marca;
        this.disco = disco;
        this.resolucion = resolucion;
        this.procesador = procesador;
        this.ram = ram;
        this.precio = precio;
        this.grafico = grafico;
        this.sistemaOperativo = sistemaOperativo; 
    }

}

const hp245g8 = new Laptop("HP 245G8",14,"245g8","HP","256GB SSD","FULL HD","RYZEN 5 3500U","16GB","140000","INTEL IRIS","WINDOW 11");

const stock = [hp245g8,hp245g8,hp245g8,hp245g8,hp245g8,hp245g8];