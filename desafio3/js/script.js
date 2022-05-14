// Declaracion de clases
class Habitacion {
    constructor(categoria, tarifaBaja, tarifaAlta){
        this.categoria = categoria;
        this.tarifaBaja = tarifaBaja;
        this.tarifaAlta = tarifaAlta;
    }
    // Método para ver las tarifas de la habitacion
    verTarifas(){
       return "Tarifas de la habitación " + this.categoria + ": \n" + "Temporada Baja: " + this.tarifaBaja + "\n" + "Temporada Alta: " + this.tarifaAlta; 
    }
}

class Reserva {
    constructor(numero, pasajero, checkin, noches, categoria){
        this.numero = numero;
        this.pasajero = pasajero;
        this.checkin = checkin;
        this.noches = noches;
        this.categoria = categoria;
        this.activa = "si"; // Función adicional a desarrollar: cancelar una reserva
    }
    mostrarReserva(){
        alert(this.pasajero + ", tu reserva está confirmada con el número " + this.numero + ". Te esperamos el " + this.checkin); // Se puede agregar un condicional según si está o no vigente
    }
    cancelarReserva(){
        this.activa = "no";
    }
}

// Se cargan tres habitaciones de clase Habitacion en un array habitaciones
const standard = new Habitacion("standard", 110, 90);
const superior = new Habitacion("superior", 110, 140);
const suite = new Habitacion("suite", 150, 300);

const habitaciones = [];

habitaciones.push(standard, superior, suite);

// Se definien las temporadas como arrays con números de meses
let temporadaBaja = [5,6,7,8,9];
let temporadaAlta = [1,2,3,10,11,12];

let listaHabitaciones = "";
let fechaLlegada;
let cantidadNoches;
let mes;
let habitacionACotizar = {};

// Se guardan las reservas en un array - Se crea un array inicial de reservas para poder utilizar en el programa
let reservas = [
    {
        numero: "Reserva #1",
        pasajero: "Juan Perez",
        checkin: "01/06/2022",
        noches: 3,
        categoria: "superior",
        activa: "si",
    },
    {
        numero: "Reserva #2",
        pasajero: "Mariana Alonso",
        checkin: "05/07/2022",
        noches: 4,
        categoria: "superior",
        activa: "si",
    },
    {
        numero: "Reserva #3",
        pasajero: "Martin Gonzalez",
        checkin: "30/09/2022",
        noches: 1,
        categoria: "standard",
        activa: "si",
    },
    {
        numero: "Reserva #4",
        pasajero: "Leon Suarez",
        checkin: "03/03/2023",
        noches: 2,
        categoria: "superior",
        activa: "si",
    },
]

let numeroReserva = 5; // En el futuro se podrá usar para que cada reserva tengo su ID

// Function para armar la lista de habitaciones

function listarHabitaciones(){
    for (item of habitaciones){
        listaHabitaciones += "- " + item["categoria"] + "\n"; 
    }
    return listaHabitaciones;
}

// Pedir al usuario la categoria y buscarla en el array de habitaciones


function solicitarCategoria(){
    let categoria;
    do{
        categoria = prompt("¿En qué categoría estás interesado? : \n" + listaHabitaciones).toLowerCase(); 
        habitacionACotizar = habitaciones.find(habitacion => habitacion.categoria == categoria);
    }while (habitacionACotizar == undefined);
    return habitacionACotizar;
}




// Obtener fechas de estadías
// Solicitar al usuario una fecha de llegada - Se extrae el mes
function solicitarFechas(){
    fechaLlegada = prompt("Muchas gracias. Ahora por favor indicanos desde cuando querés hospedarte, en formato DD/MM/AAAA");
    let mes = parseInt(fechaLlegada[3] + fechaLlegada[4]);
    
    while (fechaLlegada.length != 10 || isNaN(mes) || (mes > 13 || mes < 1)){
        fechaLlegada = prompt("Disculpas. No entiendo la fecha que ingresaste. Por favor, ingresar una fecha con el formato DD/MM/AAAA");
        mes = parseInt(fechaLlegada[3] + fechaLlegada[4]);
    };
    
    // Solicitar al usuario una cantidad de noches
    cantidadNoches = parseInt(prompt("¿Cuántas noches te gustaría quedarte con nosotros?"))
    
    // Agrega "s" a la palabra noche según la cantidad elegida
}

// Funcion cotizar estadía
function cotizarEstadia(categoria, fechaLlegada, cantidadNoches){
    // Cotiza la estadía y devuelve el total
    let noches = "noche";
    if (cantidadNoches > 1){
        noches += "s";
    }    
    if (temporadaBaja.includes(mes)){
        alert ("El total de tu estadia de " + cantidadNoches + " " + noches + " en categoría " + categoria["categoria"] + " desde el " + fechaLlegada + " es de " +  (categoria.tarifaBaja * cantidadNoches) + ". Equivale a una tarifa de " + categoria.tarifaBaja + " por noche.")
    } 
    else{
        alert ("El total de tu estadia de " + cantidadNoches + " " + noches + "  en categoría " + categoria["categoria"] + " desde el " + fechaLlegada + " es de " + (categoria.tarifaAlta * cantidadNoches) + ". Equivale a una tarifa de USD " + categoria.tarifaAlta + " por noche.")
    }
}

listarHabitaciones();
solicitarCategoria();
cotizarEstadia(habitacionACotizar, fechaLlegada, cantidadNoches);

// Function Confirmar reserva
function confirmarReserva(cantidadNoches){
    let confirmacion = prompt("Desea confirmar la reserva? S / N").toUpperCase();
    if (confirmacion == "S"){
        let pasajero = prompt("Ingresa tu nombre completo: ");
        let reservaNueva = new Reserva ("Reserva #"+numeroReserva, pasajero, fechaLlegada, cantidadNoches, habitacionACotizar['categoria']);
        reservas.push(reservaNueva);
        reservaNueva.mostrarReserva()
        numeroReserva ++;
    }
    else{
        alert("Reserva abandonada. Esperamos recibirte en otra oportunidad");
    };
    console.table(reservas);
}

// Invocación de funciones

//  Muestra por consola las tarifas de todas las habitaciones
for (const habitacion of habitaciones){
    console.log(habitacion.verTarifas());
}

// Cotiza una habitación: primero solicita la categoría, despues las fechas
solicitarCategoria();
solicitarFechas();
cotizarEstadia(habitacionACotizar, fechaLlegada, cantidadNoches);

// Confirma la reserva 
confirmarReserva(cantidadNoches);