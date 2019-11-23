const BODY_DIRECCION = document.getElementById("direccion");
const BODY_PARTIDO = document.getElementById("partido");
const BODY_PROVINCIA = document.getElementById("provincia");
const BODY_ATENCION = document.getElementById("atencion");
const BODY_NOMBRE = document.getElementById("nombre");
const BODY_EMAIL = document.getElementById("email");
const BODY_MENSAJE = document.getElementById("mensaje");
const BODY_ENVIAR = document.getElementById("enviar");

if (localStorage.getItem("idioma") !== null || localStorage.getItem("idioma") !== undefined) {
    MENU_SELECT_IDIOMA.value = localStorage.getItem("idioma");
    cambiarIdiomaBodyContacto(MENU_SELECT_IDIOMA.value);
}
MENU_SELECT_IDIOMA.addEventListener("change", (e) => {
    if (MENU_SELECT_IDIOMA.value == "eng") {
        localStorage.setItem("idioma", "eng");
        cambiarIdiomaBodyContacto("eng");
    } else if (MENU_SELECT_IDIOMA.value == "esp") {
        localStorage.setItem("idioma", "esp");
        cambiarIdiomaBodyContacto("esp")
    }
})


function cambiarIdiomaBodyContacto(idioma) {
    switch (idioma) {
        case "eng":
            BODY_DIRECCION.innerText = "Address: Zapiola 1144";
            BODY_PARTIDO.innerText = "La Matanza District - San Justo";
            BODY_PROVINCIA.innerText = "Zip Code 1754- Buenos Aires Province.";
            BODY_ATENCION.innerText = "Call Center";
            BODY_NOMBRE.innerText = "Name";
            BODY_EMAIL.innerText = "Your email"
            BODY_MENSAJE.innerText = "Message";
            BODY_ENVIAR.value = "Send";
            break;

        case "esp":
            BODY_DIRECCION.innerText = "Dirección: Zapiola 1144";
            BODY_PARTIDO.innerText = "San Justo - Partido de la Matanza";
            BODY_PROVINCIA.innerText = "CP 1754- Provincia de Buenos Aires";
            BODY_ATENCION.innerText = "Atención al Cliente";
            BODY_NOMBRE.innerText = "Nombre";
            BODY_EMAIL.innerText = "Tu email"
            BODY_MENSAJE.innerText = "Mensaje";
            BODY_ENVIAR.value = "Enviar";

    }
}