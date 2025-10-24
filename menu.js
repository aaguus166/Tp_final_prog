import promptSync from 'prompt-sync';
const prompt = promptSync();

 

export function menu() {
    const eleccion = prompt("selecione el la operacion que desea realizar 1- listar todas las prendas 2- filtrar prendas por talles 3- ir a pagar");


    switch (eleccion) {
        case "1": listarPrendas(); break;
        case "2": listar_por_talles(); break;
        case "3": pagar(); break;
    }

}
menu();

export function listarPrendas() {

    console.log("las prendas actuales son: " + JSON.stringify(prendas, null, 2));

    console.table(prendas);
}

function listar_por_talles(){
    const talle = prompt("ingrese el talle que desea filtrar S M L XL: ");
    const prendas_filtradas = prendas.filter(prenda => prenda.talle === talle.toUpperCase());
    console.table(prendas_filtradas);   

}

function pagar() {
    console.log("selecciono ir a pagar");
    
}