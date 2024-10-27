
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

document.getElementById("idTel").addEventListener("keydown", function (event) {
        
    if (!/^[0-9]$/.test(event.key)) {
        event.preventDefault();
    }
});

function validarDni(input) {
    const errorMessage = document.getElementById('error-dni');
    const valor = input.value;
    if (valor.length > 8) {
        input.value = valor.slice(0, 8);
    }
    if (valor.length < 8) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
}

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