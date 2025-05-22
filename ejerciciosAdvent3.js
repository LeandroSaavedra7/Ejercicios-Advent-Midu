// Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos.
// Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada.
// Necesitas ayudar a Santa a organizar el inventario.

// Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

// name: el nombre del juguete (string).
// quantity: la cantidad disponible de ese juguete (entero).
// category: la categoría a la que pertenece el juguete (string).

// Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

// Las claves del objeto serán las categorías de juguetes.
// Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
// Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
// Si el array está vacío, la función debe devolver un objeto vacío {}.


// const inventory = [
//   { name: 'doll', quantity: 5, category: 'toys' },
//   { name: 'car', quantity: 3, category: 'toys' },
//   { name: 'ball', quantity: 2, category: 'sports' },
//   { name: 'car', quantity: 2, category: 'toys' },
//   { name: 'racket', quantity: 4, category: 'sports' }
// ]

// organizeInventory(inventory)

// // Resultado esperado: 
// // {
// //   toys: {
// //     doll: 5,
// //     car: 5
// //   },
// //   sports: {
// //     ball: 2,
// //     racket: 4
// //   }


// ESTO ES UN OBJETO JSON QUE TIENE DOS OBJETOS JSON ADENTRO QUE SON TOYS Y SPORTS Y ESTOS ADENTRO TIENE OTRAS PROPERTYS QUE SON DOLL
// Y CAR Y EN EL OBJETO SPORTS LAS PROPERTYS SON BALL Y RACKET. 

// Recordemos que cuando conozco el valor de la property puedo usar el . (PUNTO) para poder trabajar con esa property y valor, pero en cambio
// si no sabemos el valor de esa property para trabajar con la misma tenemos que usar el corchete por ejemplo  resultadoJson[regaloCategoria] = {}; y para
// poder usar el corchete, dentro de los corchetes si o si tenemos que usar una variable ya declarada



const inventory = [

    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

function ordenarRegalos() {

    var resultadoJson = {};
    var objetoPrueba = {};
    var objetoPruebaDos = {};

    // para comparar todos los elementos del array hay que hacer dos for y recorrerlos, mietnras vamos guardando la info
    // en variables de los valores ya comparados    

    for (let i = 0; i < inventory.length; i++) {

        var regalo = inventory[i];
        var regaloName = regalo.name;
        var regaloQuantity = regalo.quantity;
        var regaloCategoria = regalo.category;

        for (let j = i + 1; j < inventory.length; j++) {
            var regalo2 = inventory[j];

            var regalo2Name = regalo2.name;
            var regalo2Quantity = regalo2.quantity;

            if (regaloName !== regalo2Name) {

                objetoPrueba[regaloName] = regaloQuantity;

            } else {

                regalo2Quantity = regaloQuantity + regalo2Quantity;
                objetoPruebaDos[regalo2Name] = regalo2Quantity;
            }
            console.log(objetoPrueba);
            console.log(objetoPruebaDos);
        }
        resultadoJson[regaloCategoria] = {};
    }
    console.log(resultadoJson);
}
var resultadoFInal = ordenarRegalos();

console.log(resultadoFInal);