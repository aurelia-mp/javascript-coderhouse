/* El programa permite:
1. Elegir una categoría de habitación
2. Elegir una fecha de llegada
3. Elegir la cantidad de noches
4. Devuelve el precio de la estadía según el mes de estadía 
*/ 

// Creación de objetos "HABITACIONES"

class Habitacion {
    constructor(categoria, tarifaBaja, tarifaAlta){
        this.categoria = categoria;
        this.tarifaBaja = tarifaBaja;
        this.tarifaAlta = tarifaAlta;
    }
}

const standard = new Habitacion("standard", 110, 90);
const superior = new Habitacion("superior", 110, 140);
const suite = new Habitacion("suite", 150, 300);

// Bienvenida
let saludar = nombre => alert("Hola " + nombre + ". Vamos a hacerte unas preguntas para cotizar tu estadía.");

let nombre = prompt("Bienvenido a nuestro cotizador. ¿Cómo te llamas?");
saludar(nombre);

// Elegir categoría de habitación
let categoria = "";
categoria = solicitarCategoria();

// Elegir fecha de llegada - Se extrae el mes

let fechaLlegada = prompt("Muchas gracias. Ahora por favor indicanos desde cuando querés hospedarte, en formato DD/MM/AAAA");

while (fechaLlegada.length != 10 || !(parseInt(fechaLlegada[3] + fechaLlegada[4]))){
    fechaLlegada = prompt("Disculpas. No entiendo la fecha que ingresaste. Por favor, ingresar una fecha con el formato DD/MM/AAAA");
};

let mes = parseInt(fechaLlegada[3] + fechaLlegada[4]);

// Elegir cantidad de noches

let cantidadNoches = prompt("¿Cuántas noches querrías hospedarte con nosotros?");

// Calcular y mostrar la tarifa por noche
let tarifa = buscarTarifa(mes, categoria);
alert("La tarifa por noche para las fechas elegidas es de " + tarifa);

// Calcular y mostrar el total de la estadía
let totalEstadia = calcularTotal(cantidadNoches, tarifa);

let noches = "noche";
if (cantidadNoches > 1){
    noches += "s";
}

alert(nombre + ", el total por una estadía de " + cantidadNoches + " " + noches + " en categoría " + categoria + " desde el " + fechaLlegada + " es de " + totalEstadia + ".")

// Declaración de funciones

function solicitarCategoria(){
    do{
        categoria = prompt("En qué categoría de habitación querrías alojarte.\n Ingresá el nombre:\n - Standard\n - Superior\n - Suite").toLowerCase();
    }
    while (!(categoria == "standard" || categoria == "superior" || categoria == "suite"));
    return categoria;
}

function buscarTarifa (mes, categoria){
    switch(categoria){
        case "standard":
            // Temporada Alta
            if(mes < 5 || mes > 9){
                return standard.tarifaAlta;
            }
            // Temporada Baja
            else{
                return standard.tarifaBaja;
            }
            break;
        case "superior":
            if(mes < 5 || mes > 9){
                return superior.tarifaAlta;
            }
            // Temporada Baja
            else{
                return superior.tarifaBaja;
            }
            break;
        case "suite":
            if(mes < 5 || mes > 9){
                return suite.tarifaAlta;
            }
            // Temporada Baja
            else{
                return suite.tarifaBaja;
            }
            break;
    }
}

function calcularTotal (noches, tarifa){
    return noches * tarifa;
}

