document.addEventListener('DOMContentLoaded', () => {
    

    const btnModo = document.getElementById('boton-modo');
    const body = document.body;

    if (btnModo) {
        btnModo.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                btnModo.innerText = "☀️ Modo Claro";
            } else {
                btnModo.innerText = "🌙 Modo Oscuro";
            }
        });
    }

    
    const carta = document.getElementById('boton-carta');
    const info = document.getElementById('cuadro-info');

    if (carta && info) {
        carta.addEventListener('click', () => {
            info.classList.toggle('visible');
            
        
            carta.style.transform = "scale(0.9)";
            setTimeout(() => {
                carta.style.transform = "scale(1.2)"; 
            }, 100);
        });
    }

  
    const campoNombre = document.getElementById("nombre");
    const campoCorreo = document.getElementById("correo");
    const campoMensaje = document.getElementById("mensaje");
    const miBoton = document.getElementById("botonenviar");
    const patronLetras = /^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]+$/;

   
    if (miBoton) {
        miBoton.addEventListener("click", function() {
            const nombreEscrito = campoNombre.value.trim();
            const correoEscrito = campoCorreo.value.trim();
            const mensajeEscrito = campoMensaje.value.trim();

            if (nombreEscrito === "" || correoEscrito === "" || mensajeEscrito === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }

            if (!patronLetras.test(nombreEscrito)) {
                alert("En el nombre solo se permiten letras.");
                return;
            }

            alert("¡Mensaje enviado con éxito, gracias " + nombreEscrito + "!");
            
            // Limpiar campos
            campoNombre.value = "";
            campoCorreo.value = "";
            campoMensaje.value = "";
        });
    }
});