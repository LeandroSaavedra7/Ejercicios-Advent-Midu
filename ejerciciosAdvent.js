// Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, 
// pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. 
// Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.
// Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y
//  devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

// const gifts1 = [3, 1, 2, 3, 4, 2, 5]
// const preparedGifts1 = prepareGifts(gifts1)
// console.log(preparedGifts1) // [1, 2, 3, 4, 5]

// const gifts2 = [5, 5, 5, 5, 6]
// const preparedGifts2 = prepareGifts(gifts2)
// console.log(preparedGifts2) // [5, 6]

// const gifts3 = []
// const preparedGifts3 = prepareGifts(gifts3)
// console.log(preparedGifts3) // []
// // No hay regalos, la lista queda vacía

const regalos = [3, 1, 2, 3,4,4,2,5,6];
var arrayVacio = [];

function limpiarLista(regalos) {

    var arrayOrdenado = regalos.sort((a, b) => {

        if (a > b) {
            return 1

        } else {
            return -1
        }

    });

    console.log(arrayOrdenado);

    for (let i = 0; i < arrayOrdenado.length; i++) {

        if (arrayOrdenado[i + 1] !== arrayOrdenado[i]) {

            arrayVacio.push(arrayOrdenado[i]);

      //  } else if (i === arrayOrdenado[arrayOrdenado.length] && i !== arrayOrdenado[arrayOrdenado.length - 1]) {

        //    arrayVacio.push(arrayOrdenado[arrayOrdenado.length]);

        } 
    }

    return arrayVacio;
}

const resultado = limpiarLista(regalos);
console.log(resultado);