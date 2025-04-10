// Papá Noel 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️,
// pero el marco debe seguir unas reglas específicas. Tu tarea es ayudar a los elfos a crear este marco mágico.

// Normas:

// Dada una matriz de nombres, debes crear un marco rectangular que los contenga todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de grosor.
// El ancho del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio en cada lado.
// Ejemplo de cómo funciona:

// createFrame(['midu', 'madeval', 'educalvolpz'])

// // Expected result:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

// createFrame(['midu'])

// // Expected result:
// ********
// * midu *
// ********


const nombres = ["miduscapo", "midu"];

var papel = "*";
var envoltorio = "";
var cuadroNom = "";

function encuadrar(nombres) {

    for (let i = 1; i < nombres.length; i++) {

        var nombre = nombres[i];
        var primera = nombres[0];
        var nombreMasLargo;

        if (nombre.length < primera.length) {

            nombreMasLargo = primera;

        } else {
            nombreMasLargo = nombre;
        }
        for (let j = 0; j < nombreMasLargo.length; j++) {

            envoltorio = envoltorio + papel;
        }
        cuadroNom = primera + cuadroNom + " " + nombre;

    }
    var cuadroFinal = envoltorio + cuadroNom + envoltorio;

    return cuadroFinal
}
const resultado = encuadrar(nombres);
console.log(resultado);