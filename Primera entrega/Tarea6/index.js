// Obtén elementos HTML
const materialInput = document.getElementById('materialInput');
const agregarMaterialBtn = document.getElementById('agregarMaterial');
const listaMateriales = document.getElementById('listaMateriales');

// Función para agregar un material a la lista
function agregarMaterial() {
    const material = materialInput.value.trim();

    if (material !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = material;
        listaMateriales.appendChild(listItem);
        materialInput.value = ''; // Limpiar el cuadro de texto
    }
}

// Agregar material al hacer clic en el botón
agregarMaterialBtn.addEventListener('click', agregarMaterial);

// Agregar material al presionar Enter 
materialInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        agregarMaterial();
    }
});
