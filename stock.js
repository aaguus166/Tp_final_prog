const prompt = require('prompt-sync')();


console.log("Bienvenido a la tienda Lilo");

export const arrayPrendas = [
    { nombre: "pantalón", tipo: "jean", talle: "40", precio: 35000, stock: 10 },
    { nombre: "bermuda", tipo: "jean", talle: "38", precio: 32000, stock: 8 },
    { nombre: "calza", tipo: "térmica", talle: "35", precio: 18000, stock: 12 },
    { nombre: "baggy", tipo: "jean", talle: "36", precio: 40000, stock: 15 },
    { nombre: "buzo", tipo: "oversize", talle: "L", precio: 30000, stock: 9 },
    { nombre: "buzo", tipo: "básico", talle: "L", precio: 30000, stock: 15 },
    { nombre: "buzo", tipo: "básico", talle: "XXL", precio: 30000, stock: 10 },
    { nombre: "remera", tipo: "top", talle: "S", precio: 15000, stock: 15 },
    { nombre: "remera", tipo: "oversize", talle: "XL", precio: 20000, stock: 10 },
    { nombre: "remera", tipo: "manga larga", talle: "S", precio: 20000, stock: 12 }
];

function mostrarStock() {
    console.log("STOCK DISPONIBLE:");
    arrayPrendas.forEach((p, i) => {
        const tipo = p.tipo ? ` - ${p.tipo}` : "";
        console.log(`${i + 1}. ${p.nombre}${tipo} | Talle: ${p.talle} | Precio: $${p.precio} | Stock: ${p.stock}`);
    });
    console.log(`\nTotal de prendas: ${arrayPrendas.length}`);
}

function VerStock(indice, cantidad) {
    const prenda = arrayPrendas[indice];

    if (!prenda) {
        console.log("Índice inválido, seleccione una prenda existente.");
        return;
    }

    if (prenda.stock >= cantidad) {
        prenda.stock -= cantidad;
        console.log(`Se compraron ${cantidad} unidad(es) de ${prenda.nombre}. Stock restante: ${prenda.stock}`);
    } else if (prenda.stock > 0) {
        console.log(`Solo hay ${prenda.stock} unidad(es) disponibles de ${prenda.nombre}.`);
    } else {
        console.log(`El producto ${prenda.nombre} está agotado.`);
    }
}

function ReponerStock(indice, cantidad) {
    const prenda = arrayPrendas[indice];

    if (!prenda) {
        console.log("Índice inválido, seleccione una prenda existente.");
        return;
    }

    prenda.stock += cantidad;
    console.log(`Se repusieron ${cantidad} unidades de ${prenda.nombre}. Nuevo stock: ${prenda.stock}`);
}
function PrendaTotal (){
console.log("Usted compro la prenda ${}, cantidad{}, total a pagar{}")




}

/*function menu() {
    let opcion;
    do {
        console.log(`
==============================
 MENÚ PRINCIPAL
1. Ver stock de prendas
2. Comprar prenda
3. Reponer stock
0. Salir
==============================`);
        opcion = parseInt(prompt("Seleccione una opción: "), 10);

        switch (opcion) {
            case 1:
                mostrarStock();
                break;
            case 2:
                mostrarStock();
                const indiceCompra = parseInt(prompt("Ingrese el número de la prenda a comprar: "), 10) - 1;
                const cantidadCompra = parseInt(prompt("Ingrese la cantidad: "), 10);
                VerStock(indiceCompra, cantidadCompra);
                break;
            case 3:
                mostrarStock();
                const indiceRepo = parseInt(prompt("Ingrese el número de la prenda a reponer: "), 10) - 1;
                const cantidadRepo = parseInt(prompt("Ingrese la cantidad a reponer: "), 10);
                ReponerStock(indiceRepo, cantidadRepo);
                break;
            case 0:
                console.log("Saliendo del sistema. Hasta luego!");
                break;
            default:
                console.log("Opción inválida, intente nuevamente");
        }
    } while (opcion !== 0);
}

menu();*/
