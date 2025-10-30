import promptSync from 'prompt-sync';
const prompt = promptSync();
import { arrayPrendas } from './stock.js';

 function menu() {
    const eleccion = prompt("selecione el la operacion que desea realizar: 1- listar todas las prendas 2- filtrar por talle 3- ir a pagar 4- reponer stock ");

    switch (eleccion) {
        case "1": listarPrendas(); break;
        case "2": listar_por_talles(); break;
        case "3": pagar(); break;
        case "4": Reponerstock(); break;
    }
} 

menu();

export function listarPrendas() {
 const prendas_filtradas = arrayPrendas.filter(prenda => prenda.talle === talle.toUpperCase());
    console.log("las prendas actuales son: " + JSON.stringify(prendas, null, 2));

    console.table(arrayprendas);
}

export function listar_por_talles(){
    const talle = prompt("ingrese el talle que desea filtrar S M L XL: ");
    const prendas_filtradas = prendas.filter(prenda => prenda.talle === talle.toUpperCase());
    console.table(prendas_filtradas);   

}

export function pagar() {
    console.log("selecciono ir a pagar");
    
}
