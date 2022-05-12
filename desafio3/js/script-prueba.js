// SE puede sumar una función para que al principio el usuario elija si es hotelero o pax y si es hotelero acceder a la edicion de tarifas
// Las habitaciones tendrían que definirse como clase, no literalmente
// hay que ver si se puede hacer un loop para la carga de tarifas (problema de lo largo de la carga)

elegirOperacion();

// Prueba Array con Meses y Días

const habitacion1 = { 
    categoria : "juniorSuite",
    tarifas : { 
            'enero': [110, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 180, 190, 200, 220, 220, 230],
            'febrero': [100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 150, 180, 190, 100, 130, 100, 80, 90, 200, 210, 220, 190, 180, 290, 300, 320],
            'marzo': [100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 180, 190, 200, 220, 220, 230],
            'abril': [100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 180, 190, 200, 220, 220],
            'mayo': [100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 180, 190, 200, 220, 220, 230],
            'julio': [100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 180, 190, 200, 220, 220, 230],
            'agosto': [100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 180, 190, 200, 220, 220, 230],
            'septiembre': [100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 180, 190, 200, 220, 220],
            'octubre': [100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 180, 190, 200, 220, 220, 230],
            'noviembre': [100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 180, 190, 200, 220, 220],
            'diciembre': [100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 100, 100, 100, 100, 120, 130, 160, 200, 100, 100, 110, 100, 180, 190, 200, 220, 220, 230],
        },
    descripcion: "Habitacion con vista mar",
}

console.log(habitacion1.tarifas['enero'][2])
habitacion1.tarifas['enero'][2]=500
console.table(habitacion1.tarifas)

// Función editar tarifas
function editarTarifas(mes, dia){
    habitacion1.tarifas[mes][dia - 1] = parseInt(prompt ("nueva tarifa"));
}

// Solicitar al usuario nuevas tarifas para editar calendario de tarifas
let mes = prompt("Mes a editar").toLowerCase();
let dia = parseInt(prompt("Día a editar"))
console.log(dia);

editarTarifas(mes,dia);
console.table(habitacion1.tarifas)

// Elegir si cotizar estadía o editar tarifas
function elegirOperacion(){
    let eleccion = parseInt(prompt("¿Qué operación desea realizar? Ingrese el número de operación \n 1. Pasajero: Cotizar una estadía \n 2. Hotelero: Editar las tarifas"))
    if (eleccion == 1){
        solicitarCategoria();
        cotizarEstadia();
    }
    else if(eleccion == 2){
        let mes = prompt("Mes a editar").toLowerCase();
        let dia = parseInt(prompt("Día a editar"));
        editarTarifas(mes,dia);
    }
    else{
        prompt("Opción inválida.");
        elegirOperacion();
    }
}