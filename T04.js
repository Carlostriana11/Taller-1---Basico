// Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

function bingBong(){
    let numero = parseInt(prompt('ingrese un numero por favor'))

    if( numero %3 == 0 && numero %5 == 0 ){
        return console.log(' bingbong ');
    }else if(numero %3 == 0){
        return console.log(' bing ');
    }else if ( numero % 5 == 0){
        return console.log (' bong ');
    }else{
        return console.log(numero)
    }
}
bingBong();