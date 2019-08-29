console.log(
  "Ejercicio 1: Declarar una variable, asignarle un valor y mostrarlo en consola.:"
);
let nombreAuto = "Toyota";
console.log("Nombre de auto: " + nombreAuto);

console.log(
  "Ejercicio 2: Declarar y asignar valor a 2 variables, sumarlas y mostrar en consola el resultado"
);
let numero1 = 20,
  numero2 = 50,
  resultado;
resultado = numero1 + numero2;
console.log("El resultado de la suma de numero1 y numero2 es de: " + resultado);

console.log("Ejercicio 3: Comparar 2 valores y mostrar que dato es mayor:");
let valor1 = 5,
  valor2 = 7;
console.log("Valor 1: " + valor1 + " Valor 2: " + valor2);
if (valor1 > valor2) {
  console.log("El Valor1: " + valor1 + " es mayor que el Valor2: " + valor2);
} else {
  console.log("El Valor2: " + valor2 + " es mayor que el Valor1: " + valor1);
}

console.log("Ejercicio 4: Tabla de multiplicar del número 7");
let numero = 7;
for (let i = 1; i <= 10; i++) {
  console.log(numero + " * " + i + " = " + numero * i);
}

console.log("Ejercicio 5: Concatenar 2 variables y mostrarlos en consola:");
console.log("Valor 1: " + numero1 + " concatenado con Valor 2: " + numero2);

console.log(
  "Ejercicio 6: Mostrar una pestaña de alerta antes de cargar la página: "
);
alert("Bienvenidos a JavaScript");

console.log(
  "Ejercicio 7: Ingresar un valor por medio de una pestaña en la página y mostrarlo tanto en consola como en el documento"
);
let mostrarValor = prompt("Ingrese el valor a mostrar: ");
document.write(mostrarValor);
console.log(mostrarValor);

console.log("Ejercicio 8: Mostrar un valor en pantalla");
document.write(" " + 10);

console.log("Ejercicio 9: Cambiar el texto de un botón al darle click");
function cambiarColor() {
  document.getElementById("cambiaColor").innerHTML = "Hola";
}

console.log(
  "Ejercicio 10: Mostrar el tamaño de un texto guardado en una variable"
);
let tamanoTexto = "Hola";
Console.log("Tamaño del texto: " + tamanoTexto.length);
