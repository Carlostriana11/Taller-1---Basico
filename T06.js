// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces:
function repetir (){

    let palabra = prompt(' ingrese una palabra ');
    let numeroDeVeces = parseInt(prompt('ingrese el numero de vesces que quiere que se repita'))
        for(let i = 0; i <numeroDeVeces; i++){
            console.log( palabra )
        }
    }
    repetir();