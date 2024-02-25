$(document).ready(function(){
    $(".progresspage").owlCarousel({
        items:1,
        nav:true,
        loop: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        margin: 20,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            767:{
                items: 3
            },
            1000:{
                items:4
            }
        }
    });

    $(".offeryou").owlCarousel({
        items:1,
        nav:true,
        loop: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        margin: 20,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });
});

/******************/

$(document).ready(function() {
	/*GALERIA PORTAFOLIO LOGOTIPO*/
    $("#gallery-multimedia").lightGallery({
        selector: '.item>a ',
        googlePlus: false,
        pinterest: false
    });
});


function enviarFormulario() {
    var formData = {
        nombreCompleto: document.querySelector('input[name="fullname"]').value,
        dni: document.querySelector('input[name="dni"]').value,
        celular: document.querySelector('input[name="celular"]').value,
        ubicacion: document.querySelector('input[name="ubicacion"]').value,
        correo: document.querySelector('input[name="correo"]').value,
        tipoSolicitud: document.querySelector('#selectTipo').value
    };

    // Validación básica
    if (!formData.nombreCompleto || !formData.dni || !formData.celular || !formData.ubicacion || !formData.correo || formData.tipoSolicitud === "Tipo de solicitud") {
        Swal.fire({
            title: 'Error!',
            text: 'Por favor, completa todos los campos',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
        return;
    }else{
        // var xhr = new XMLHttpRequest();
        // xhr.open("POST", "/api/form", true);
        // xhr.setRequestHeader("Content-Type", "application/json");

        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState === 4 && xhr.status === 200) {
        //         // Manejar la respuesta del servidor si es necesario
        //         console.log(xhr.responseText);
        //     }
        // };

        // xhr.send(JSON.stringify(formData));
        Swal.fire({
            title: 'Enviado!',
            text: 'Los datos fueron enviados correctamente...',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        });
        setTimeout(function () {
            location.reload();
        }, 2000);
        
    }

    
}