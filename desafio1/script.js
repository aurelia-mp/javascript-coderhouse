// El programa cuenta de 5 en 5 desde el número inicial y la cantidad de veces ingresados por el usuario

let numero = 0;
let contador = 0;
let resultado = 0;

do{
    numero = prompt("Hola. Vamos a contar de 5 en 5. Ingrese el número inicial")
}while (!parseInt(numero));
numero = parseInt(numero);

do{
    contador = prompt("Ahora, ingrese la cantidad de incrementos");
}while (!parseInt(contador));
contador = parseInt(contador);

for (let i = 1; i < contador+1 ; i++){
    resultado = numero + 5 * i;
    if(i == 1){
        alert(numero + " más " + i + " vez 5 es igual a " + resultado);
    }
    else{
        alert(numero + " más " + i + " veces 5 es igual a " + resultado);
    }   
}