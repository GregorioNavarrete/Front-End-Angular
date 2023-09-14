// con el JS , selecciono al div,donde se mostrarán los números impares
const imparesList = document.getElementById('Lista');

// Función para generar los números impares del 1000 al 300 en forma descendente
function generarNumerosImpares() {
    for (let i = 1000; i >= 300; i--) {
        if (i % 2 !== 0) { // Verificar si el número es impar
            const numeroImpar = document.createElement('p');//Creo la etiqueta para mostra el numero por pantalla
            numeroImpar.textContent = i;//le asigno valor dento de la etiqueta
            imparesList.appendChild(numeroImpar);//Pongo el numero dentro de la lista
        }
    }
}

// Llama a la función para generar los números impares
generarNumerosImpares();
