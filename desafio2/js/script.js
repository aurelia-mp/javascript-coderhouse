/* El programa permite:
1. Elegir una categoría de habitación
2. Elegir una fecha de llegada
3. Elegir la cantidad de noches
4. Devuelve el precio de la estadía según el mes de estadía 
*/ 

// Bienvenida
let saludar = nombre => alert("Hola " + nombre + ". Vamos a hacerte unas preguntas para cotizar tu estadía.");

let nombre = prompt("Bienvenido a nuestro cotizador. ¿Cómo te llamas?");
saludar(nombre);

// Elegir categoría de habitación
let categoria = "";
categoria = solicitarCategoria();

// Elegir fecha de llegada - Se extrae el mes

let fechaLlegada = prompt("Muchas gracias. Ahora por favor indicanos desde cuando querés hospedarte, en formato DD/MM/AAAA");
console.log(fechaLlegada);

while (fechaLlegada.length != 10 || !(parseInt(fechaLlegada[3] + fechaLlegada[4]))){
    fechaLlegada = prompt("Disculpas. No entiendo la fecha que ingresaste. Por favor, ingresar una fecha con el formato DD/MM/AAAA");
};


let mes = parseInt(fechaLlegada[3] + fechaLlegada[4]);
console.log("Mes ingresado: " + mes);

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
    categoria = prompt("En qué categoría de habitación querrías alojarte.\n Ingresá el nombre:\n - Standard\n - Superior\n - Suite");
    switch (categoria){
        case "Standard":
        case "standard":
            return "Standard";
            break;
        case "Superior":
        case "superior":
            return "Superior";
            break;
        case "Suite":
        case "suite":
            return "Suite";
            break;
        default:
            solicitarCategoria();
            break;        
    }
}

function buscarTarifa (mes, categoria){
    switch(categoria){
        case "Standard":
            // Temporada Alta
            if(mes < 5 || mes > 9){
                return 110;
            }
            // Temporada Baja
            else{
                return 90;
            }
            break;
        case "Superior":
            if(mes < 5 || mes > 9){
                return 140;
            }
            // Temporada Baja
            else{
                return 110;
            }
            break;
        case "Suite":
            if(mes < 5 || mes > 9){
                return 200;
            }
            // Temporada Baja
            else{
                return 150;
            }
            break;
    }
}
function calcularTotal (noches, tarifa){
    return noches * tarifa;
}
