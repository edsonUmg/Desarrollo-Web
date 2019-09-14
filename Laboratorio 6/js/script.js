var miArreglo = [];
var cantidadNumeros = prompt(
  "Ingrese la cantidad de números a generar aleatoreamente no mayor a 20 números"
);
function generarNumAleatorios() {
  miArreglo = [];
  while (miArreglo.length < cantidadNumeros) {
    var numeroAleatorio = Math.ceil(Math.random() * cantidadNumeros);
    var existe = false;
    for (var i = 0; i < miArreglo.length; i++) {
      if (miArreglo[i] == numeroAleatorio) {
        existe = true;
        break;
      }
    }
    if (!existe) {
      miArreglo[miArreglo.length] = numeroAleatorio;
    }
  }
  console.log(miArreglo);
  document.getElementById("numAleatorio").innerHTML = miArreglo;
}

function burbuja() {
  var n, i, k, aux;
  n = miArreglo.length;
  for (k = 1; k < n; k++) {
    for (i = 0; i < n - k; i++) {
      if (miArreglo[i] > miArreglo[i + 1]) {
        aux = miArreglo[i];
        miArreglo[i] = miArreglo[i + 1];
        miArreglo[i + 1] = aux;
      }
    }
  }
  console.log(miArreglo);
  document.getElementById("algBurbuja").innerHTML = miArreglo;
}

function algQuicksort() {
  function quick_Sort(arregloOriginal) {
    if (arregloOriginal.length <= 1) {
      return arregloOriginal;
    } else {
      var izquierda = [];
      var derecha = [];
      var nuevoArreglo = [];
      var pivote = arregloOriginal.pop();
      var length = arregloOriginal.length;

      for (var i = 0; i < length; i++) {
        if (arregloOriginal[i] <= pivote) {
          izquierda.push(arregloOriginal[i]);
        } else {
          derecha.push(arregloOriginal[i]);
        }
      }

      return nuevoArreglo.concat(
        quick_Sort(izquierda),
        pivote,
        quick_Sort(derecha)
      );
    }
  }

  var arregloCorregido = quick_Sort(miArreglo);
  console.log(arregloCorregido);
  document.getElementById("algQuicksort").innerHTML = arregloCorregido;
}

var maximo = 0;
function numeroMayor() {
  for (var i = 0, len = miArreglo.length; i < len; i++) {
    if (maximo < miArreglo[i]) {
      maximo = miArreglo[i];
    }
  }
  console.log(maximo);
  document.getElementById("numMayor").innerHTML = maximo;
}

var minimo = 0;
function numeroMenor() {
  for (var i = 0, len = miArreglo.length; i < len; i++) {
    if (minimo > miArreglo[i]) {
      minimo = miArreglo[i];
    }
  }
  console.log(minimo);
  document.getElementById("numMenor").innerHTML = minimo;
}
