document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos
    const btnModo = document.getElementById('boton-modo');
    const body = document.body;

    // Lógica para el Modo Oscuro
    btnModo.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
       

        
        if (body.classList.contains('dark-mode')) {
            btnModo.innerText = "☀️ Modo Claro";
        } else {
            btnModo.innerText = "🌙 Modo Oscuro";
    
        }
    });
  //carta
    const carta = document.getElementById('boton-carta'); // La imagen de Sakura
    const info = document.getElementById('cuadro-info'); // El cuadro con tu info

    if (carta && info) {
        carta.addEventListener('click', () => {
            
            info.classList.toggle('visible');
            
            
            carta.style.transform = "scale(0.9)";
            setTimeout(() => {
                carta.style.transform = "scale(1)";
            }, 100);
        });
    }
});

const campoNombre=document.getElementById("nombre");
const campoCorreo=document.getElementById("correo");
const campoMensaje = document.getElementById("mensaje");
const miBoton = document.getElementById("botonenviar");
const patronLetras = /^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]+$/;




miBoton.addEventListener("click", function(){
   
    const nombreEscrito = campoNombre.value;
    const correoEscrito = campoCorreo.value;
    const mensajeEscrito = campoMensaje.value;
  
 

    
    if (nombreEscrito === "" || correoEscrito === "" || mensajeEscrito === "") {
        alert("Por favor, completa todos los campos.");
        return; 
    }

    
    if (!patronLetras.test(nombreEscrito)) {
        alert("Solo se permiten letras.");
        return; 
    }

   
    alert("¡Mensaje enviado con éxito, gracias " + nombreEscrito + "!");
    
   
    campoNombre.value = "";
    campoCorreo.value = "";
    campoMensaje.value = "";
});
