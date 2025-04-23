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


const nombres = ["midu", "probando", "tuv"];

function encuadrar(nombres) {

    var papel = "*";
    var envoltorio = "";
    var cuadroNom = "";
    var nombreMasLargo = "";

    for (let i = 0; i < nombres.length; i++) {

        var nombre = nombres[i];

        if (nombre.length >= nombreMasLargo.length) {
            nombreMasLargo = nombre;
        }
    }

    for (let j = 0; j < nombreMasLargo.length + 4; j++) {

        envoltorio = envoltorio + papel;
    }

    for (let k = 0; k < nombres.length; k++) {
        var nombre = nombres[k];
        var espacio = nombreMasLargo.length - nombre.length + 1;
        cuadroNom = cuadroNom + "* " + nombre + " ".repeat(espacio) + "*" + "\n";
    }

    var cuadroFinal = envoltorio + "\n" + cuadroNom + envoltorio;
    return cuadroFinal
}
const resultado = encuadrar(nombres);
console.log(resultado);





