function obtenerValores() {
let valor1 = document.getElementById("valor1").value;
let valor2 = document.getElementById("valor2").value;

if (valor1 === "" || valor2 === "") {
    mostrarResultado("resultadoo");
    return;
}

// Convertir a número
valor1 = Number(valor1);
valor2 = Number(valor2);

return { valor1, valor2 };

}

function mostrarResultado(resultado) {
document.getElementById("resultado").innerText = resultado;
}

// SUMAR
function sumar() {
const { valor1, valor2 } = obtenerValores();
let resultado = valor1 + valor2;
mostrarResultado(resultado);
}

// RESTAR
function restar() {
const { valor1, valor2 } = obtenerValores();
let resultado = valor1 - valor2;
mostrarResultado(resultado);
}

// MULTIPLICAR
function multiplicar() {
const { valor1, valor2 } = obtenerValores();
let resultado = valor1 * valor2;
mostrarResultado(resultado);
}

// DIVIDIR
function dividir() {
const { valor1, valor2 } = obtenerValores();

if (valor2 === 0) {
mostrarResultado("No se puede dividir por 0");
return;
}

let resultado = valor1 / valor2;
mostrarResultado(resultado);
}