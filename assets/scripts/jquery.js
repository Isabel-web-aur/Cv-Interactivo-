$(document).ready(function() { 
    $('.btn-fav').on('click', function() {
        
        $(this).toggleClass('active'); 
        
       
        $('.aviso-fav').remove();

        // 2. Decidimos el texto según si está activo o no
        let texto = $(this).hasClass('active') ? "Añadido en tu carro❤" : "Quitado de tu carro ❌";

        let mensaje = $('<div class="aviso-fav">' + texto + '</div>');
        $('body').append(mensaje);

        // 4. Animación: Aparece, espera y se borra
        mensaje.fadeIn(300).delay(1500).fadeOut(300, function() {
            $(this).remove(); 
        });
    });
});