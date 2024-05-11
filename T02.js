// Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

function edadActual (){
    let añoActual = 2024;
    let anio = parseInt(prompt('ingrese su año de nacimiento por favor'));
    let nombre = prompt('ingrese su nombre por favor');

    return console.log (`Hola ${nombre}, grandioso! tienes ${añoActual - anio} años`);
}
edadActual();