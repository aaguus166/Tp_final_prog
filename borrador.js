const prompt = require('prompt-sync')();

console.log("Bienvenido a la tienda Lilo");

const cantidad = prompt("ingrese cantidad")

const prenda1 = {
    nombre: "pantalon",
    tipo : "jean",
    marca : "venus",
    precio : $35000,
    stock: 10
}


const arrayPrendas = [prenda1];

if (arrayPrendas[0].stock > 0) {
   arrayPrendas[0].stock -= cantidad;
    console.log(`Se compro cantidad de: ${prendaStock}`)
    else{
    console.log("El producto "$prenda1" no se encuentra en stock");
    }
}
