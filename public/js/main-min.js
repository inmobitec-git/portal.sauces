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
        nIdPortal: 1,
        sPortal: "SAUCES",
        sURL: "https://www.sauces.com.pe",
        sNombreCompleto: document.querySelector('input[name="fullname"]').value,
        sDNI: document.querySelector('input[name="dni"]').value,
        sCelular: document.querySelector('input[name="celular"]').value,
        sUbicacion: document.querySelector('input[name="ubicacion"]').value,
        sCorreo: document.querySelector('input[name="correo"]').value,
        nIdTipoSolicitud: parseInt(document.querySelector('#selectTipo').value),
        sTipoSolicitud: $('#selectTipo option:selected').text()
    };
    if (
        !formData.nIdPortal
        || !formData.sPortal
        || !formData.sURL
        || !formData.sNombreCompleto
        || !formData.sDNI
        || !formData.sCelular
        || !formData.sUbicacion
        || !formData.sCorreo
        || !formData.nIdTipoSolicitud
    ) {
        Swal.fire({
            title: 'Error!',
            text: 'Por favor, completa todos los campos',
            icon: 'error',
            confirmButtonText: 'Cool'
        });
        return;
    }else{
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://localhost:5001/api/FormularioContacto/InsFormularioContactoPortal", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Manejar la respuesta del servidor si es necesario
                Swal.fire({
                    title: 'Enviado!',
                    text: 'Los datos fueron enviados correctamente...',
                    icon: 'success',
                    confirmButtonText: 'Cerrar'
                });
                setTimeout(function () {
                    location.reload();
                }, 1500);
            }
        };

        xhr.send(JSON.stringify(formData));
        
        
    }

    
}