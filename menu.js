const prompt = require('prompt-sync')();
 
const prenda1 = {
    nombre: "buzo deportivo",
    precio: 5000,
    stock: 10,
    color: "azul",
    talle: "M",
    categoria: "buzos"
}

const prenda2 = {
    nombre: "remera casual",
    precio: 2000,
    stock: 20,
    color: "blanco",
    talle: "L",
    categoria: "remeras"
}

const prenda3 = {
    nombre: "pantalon jean",
    precio: 7000,
    stock: 15,
    color: "negro",
    talle: "S",
    categoria: "pantalones"
}


const prendas = [prenda1, prenda2, prenda3];

const a = "buzos";
const b = "remeras";
const c = "pantalones";


export function menu() {
    const eleccion = prompt("selecione el la operacion que desea realizar 1- listar prendas 2- XX 3- EEE ");


    switch (eleccion) {
        case "1": listarPrendas(); break;
        case "2": funcionB(); break;
    }

    

    
}
menu();

function listarPrendas() {
    console.log(`las prendas actuales son ${prendas}`);
    console.table(prendas);
}

function funcionB() {
    console.log(`estas en la seccion ${B}`);
}