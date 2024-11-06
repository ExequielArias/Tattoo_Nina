
function validarTelefono(input) {
    const errorMessage = document.getElementById('error-telefono');
    const valor = input.value;
    if (valor.length > 10) {
        input.value = valor.slice(0, 10);
    }
    if (valor.length < 10) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
}

const inputTel = document.getElementById("IdTel");

    inputTel.addEventListener("keydown", function (event) {
        // Permitir teclas especiales (retroceso, tab, flechas, etc.)
        if (
            event.key === "Backspace" ||
            event.key === "Tab" ||
            event.key === "ArrowLeft" ||
            event.key === "ArrowRight"
        ) {
            return;
        }

        // Prevenir cualquier cosa que no sea un número
        if (!/^\d$/.test(event.key)) {
            event.preventDefault();
        }

        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10); // Cortar a 10 dígitos si el valor es mayor
        }
    });

const inputDni = document.getElementById("IdDni");

inputDni.addEventListener("input", function (event) {
    // Eliminar cualquier carácter que no sea numérico
    this.value = this.value.replace(/[^0-9]/g, '');

    // Limitar la cantidad máxima de caracteres a 8
    if (this.value.length > 8) {
        this.value = this.value.slice(0, 8);
    }
});

// Prevenir la entrada de más de 8 dígitos en 'keydown'
inputDni.addEventListener("keydown", function(event) {
    // Permitir teclas especiales como Backspace, Tab, flechas, etc.
if (
    event.key === "Backspace" || 
    event.key === "Tab" || 
    event.key === "ArrowLeft" || 
    event.key === "ArrowRight"
) {
     return;
}

// Prevenir la entrada de más de 8 dígitos
if (input.value.length >= 8 && !isNaN(event.key)) {
    event.preventDefault();
}
});



const fechaInput = document.getElementById('IdFecha');
const errorMessage = document.getElementById('error-fecha');
const hoy = new Date();
const yyyy = hoy.getFullYear();
const mm = String(hoy.getMonth() + 1).padStart(2, '0');
const dd = String(hoy.getDate()).padStart(2, '0');
const fechaActual = `${yyyy}-${mm}-${dd}`;

fechaInput.min = fechaActual;

const tresMeses = new Date(hoy.setMonth(hoy.getMonth() + 3));
const yyyyMax = tresMeses.getFullYear();
const mmMax = String(tresMeses.getMonth() + 1).padStart(2, '0');
const ddMax = String(tresMeses.getDate()).padStart(2, '0');
const fechaMaxima = `${yyyyMax}-${mmMax}-${ddMax}`;
fechaInput.max = fechaMaxima;

fechaInput.addEventListener('change', function() {
    const fechaSeleccionada = fechaInput.value;

    if (fechaSeleccionada < fechaActual) {
        errorMessage.style.display = 'block';
        fechaInput.value = ''; 
    } else {
        errorMessage.style.display = 'none'; 
    }
});


const nombreInput = document.getElementById('IdNombreApellido');
const error = document.getElementById('error-nombre');

//Validar la entrada del usuario
nombreInput.addEventListener('input', function() {
    //Permitir solo letras (mayúsculas y minúsculas) y espacios
    const reglas = /^[a-zA-Z\s]*$/;

    // Si el valor no coincide con la expresión regular, mostrar error
    if (!reglas.test(nombreInput.value)) {
        error.style.display = 'block'; // Mostrar mensaje de error
        nombreInput.value = nombreInput.value.replace(/[^a-zA-Z\s]/g, ''); // Eliminar caracteres no permitidos
    } else {
        error.style.display = 'none'; // Ocultar el mensaje si la entrada es válida
    }
});


















    