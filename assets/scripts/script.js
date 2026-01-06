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
    const carta = document.getElementById('boton-carta');
    const info = document.getElementById('cuadro-info');
    

    if (carta && info) {
        carta.addEventListener('click', () => {
            
            info.classList.toggle('visible');
            
            
            carta.style.transform = "scale(0.95)";
            setTimeout(() => {
                carta.style.transform = "";
            }, 100);
        });
    }
});

const campoNombre=document.getElementById("nombre");
const campoCorreo=document.getElementById("correo");
const miBoton= document.getElementById("botonenviar");


miBoton.addEventListener("click", function(){
    const nombreEscrito= campoNombre.value;
    const correoEscrito= campoCorreo.value;
    if (nombreEscrito ==="" ||correoEscrito==="")
    {
        //mostramos un mensaje de error.
        alert("¡Hola Por favor, completa los campos.¡");
    }else{
        //...si todo ésta bien,mostramos un mensaje de éxito.
        alert("!Mensaje enviado con éxito ,gracias"+nombreEscrito);
    }
    // limpiar los cuadros,para el siguiente
    campoNombre.value="";
    campoCorreo.value="";

    const campoMensaje=document.getElementById("mensaje");
    const mensajeEscrito=campoMensaje.value;
    campoMensaje.value="";
});
