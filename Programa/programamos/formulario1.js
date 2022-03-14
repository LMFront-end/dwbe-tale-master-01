//alert("funciona");

//empezamos en orden

/* inicializamos la funcion del botón */

document.getElementById("form").addEventListener('submit', (e) => {
    e.preventDefault()

    /* Datos del usuario*/

    let nombre_usuario = document.getElementById('nombre_usuario').value;
    let apellido_usuario = document.getElementById('apellidos_usuario').value;
    let edad_usuario = document.getElementById('edad_usuario').value;

    // pregunta tecnica

    /* como podemos hacer que a partir de la edad se pueda seguir rellenando el formulario*/

    /*contacto del usuario*/

    let email_usuario = document.getElementById('email_usuario').value;
    let telefono_usuario = document.getElementById('telefono_usuario').value;

    /* Selecciona*/
    /* Como la seleccion es type=radio no se le pondra el value en el document.getElementById, se hara de la siguiente manera*/

    let opcion = "";

    let opcionSi = document.getElementById('si');
    let opcionNo = document.getElementById('no');

    //declaramos un if
    //Se utiliza el checked para saber si se eligio la opcion
    if (opcionSi.checked) {
        opcion = opcionSi.value;
    } else {
        opcion = opcionNo.value;
    }


    /*Seleccione*/

    let tipoVehiculo = "";

    let vehiculoMoto = document.getElementById('tipo_licencia_moto');
    let vehiculoCarro = document.getElementById('tipo_licencia_carro');
    //let ambosVehiculos = document.getElementById('tipo_licencia_ambos');

    if (vehiculoMoto.checked) {
        tipoVehiculo = vehiculoMoto.value;
    } else {
        tipoVehiculo = vehiculoCarro.value;
    }

    /* Fecha de expiracion*/

    //aqui es donde empieza jesucristo a padecer

    let fechaIngresada = "";
    let fechaValidar = new Date("2021/05/20");

    document.getElementById("expira_lic").addEventListener("input", function(evt) {
        let fechaIngresada = evt.target.value;

        //valida?
        if (fechaIngresada > fechaValidar) {
            document.getElementById("salida").innerText;
            console.log(fechaIngresada);
        } else {
            document.getElementById("salida").innerText;
            console.log("fecha no valida, renueve su licencia")
        }

    });



    let avisoFinal = `
    nombre: ${nombre_usuario}
    apellido: ${apellido_usuario}
    edad: "mayor de edad"
    email: ${email_usuario}
    telefono: ${telefono_usuario}
    Licencia de conducción: ${opcion}
    tipo de vehiculo: ${tipoVehiculo}
    fecha de expiración: ${fechaIngresada}
    `;

    console.log(avisoFinal);

});