const BODY_CERTIFICACIONES = document.getElementById("certificaciones-titulo");
const BODY_INSCRIPCION = document.getElementById("inscripcion");
const BODY_MINISTERIO = document.getElementById("ministerio");
const BODY_REPARADOR = document.getElementById("reparador");
const BODY_METEOLOGIA = document.getElementById("meteologia");


if (localStorage.getItem("idioma") !== null || localStorage.getItem("idioma") !== undefined) {
    MENU_SELECT_IDIOMA.value = localStorage.getItem("idioma");
    cambiarIdiomaBodyCertificaciones(MENU_SELECT_IDIOMA.value);
}
MENU_SELECT_IDIOMA.addEventListener("change", (e) => {
    if (MENU_SELECT_IDIOMA.value == "eng") {
        localStorage.setItem("idioma", "eng");
        cambiarIdiomaBodyCertificaciones("eng");
    } else if (MENU_SELECT_IDIOMA.value == "esp") {
        localStorage.setItem("idioma", "esp");
        cambiarIdiomaBodyCertificaciones("esp")
    }
})

function cambiarIdiomaBodyCertificaciones(idioma) {
    switch (idioma) {
        case "eng":
            BODY_CERTIFICACIONES.innerText = "Certifications";
            BODY_INSCRIPCION.innerText = "RUMP Inscription";
            BODY_MINISTERIO.innerText = "Production Ministry";
            BODY_REPARADOR.innerText = "Auditer Repairman";
            BODY_METEOLOGIA.innerText = "by legal Meteology INTI";
            break;

        case "esp":
            BODY_CERTIFICACIONES.innerText = "Certificaciones";
            BODY_INSCRIPCION.innerText = "Inscripcion RUMP";
            BODY_MINISTERIO.innerText = "Ministerio de Produccion";
            BODY_REPARADOR.innerText = "Reparador Auditado";
            BODY_METEOLOGIA.innerText = "por Meteologia legal INTI";
    }
}