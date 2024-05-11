// Escribe un programa que pida al usuario ingresar un número, luego pide un segundo número e imprime en la consola la suma de los dos números ingresados.


function suma (){
    let numero1 = parseInt(prompt('ingrese un numero por favor '))
    let numero2 = parseInt(prompt('ingrese el segundo numero por favor '))

    return console.log(`la suma de los dos numeros es ${numero1 + numero2}`)
}
suma();