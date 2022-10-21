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

const hp245g8 = new Laptop("HP 245G8",14,"245G8","HP","256GB SSD","FULL HD","RYZEN 5 3500U","16GB",140000,"INTEL IRIS","WINDOW 11");
const msigf65 = new Laptop("MSI GF65",15.6,"GF65","MSI","512GB SSD","FULL HD","INTEL I7 10TH","16GB",370000,"GEFORCE RTX 3060","WINDOWS 11");
const asusx515ea = new Laptop("ASUS X515EA",15.6,"X515EA","ASUS","512GB SSD","FULL HD","INTEL CORE I5","16GB",180000,"INTEL IRIS","WINDOWS 10");
const dellLatitude3310 = new Laptop("DELL LATITUDE 3310",13.3,"3310","DELL","512GB SSD","FULL HD","INTEL CORE I5 8TH","16GB",182000,"INTEL GRAPHIS","WINDOWS 10");
const lenovoYogaC13 = new Laptop("LENOVO THINKPAD C13 YOGA",13.3,"C13","LENOVO","256GB SSD","FULL HD","RYZEN 7 3700U","16GB",170000,"INTEL IRIS","WINDOWS 11");
const acerSf313 = new Laptop("ACER SWIFT SF313-52",13.5,"SF313-52","ACER","512GB SSD","WQHD","INTEL I7 1065G7","16GB",220000,"INTEL IRIS PLUS","WINDOWS 11")




const stock = [hp245g8,msigf65,asusx515ea,dellLatitude3310,lenovoYogaC13,acerSf313];