const BODY_FABRICACION = document.getElementById("fabricacion");
const BODY_CALIBRACION = document.getElementById("calibracion");
const BODY_MEDIDAS = document.getElementById("medidas");
const BODY_ASESORAMIENTO = document.getElementById("asesoramiento");


if (localStorage.getItem("idioma") !== null || localStorage.getItem("idioma") !== undefined) {
    MENU_SELECT_IDIOMA.value = localStorage.getItem("idioma");
    cambiarIdiomaBody(MENU_SELECT_IDIOMA.value);
}
MENU_SELECT_IDIOMA.addEventListener("change", (e) => {
    if (MENU_SELECT_IDIOMA.value == "eng") {
        localStorage.setItem("idioma", "eng");
        cambiarIdiomaBody("eng");
    } else if (MENU_SELECT_IDIOMA.value == "esp") {
        localStorage.setItem("idioma", "esp");
        cambiarIdiomaBody("esp")
    }
})

function cambiarIdiomaBody(idioma) {
    switch (idioma) {
        case "eng":
            BODY_FABRICACION.innerText = "Manufacturing";
            BODY_CALIBRACION.innerText = "Calibration and repair";
            BODY_MEDIDAS.innerText = "of capacity measures";
            BODY_ASESORAMIENTO.innerText = "Advice on ISO quality standards";
            break;

        case "esp":
            BODY_FABRICACION.innerText = "Fabricación";
            BODY_CALIBRACION.innerText = "Calibración y Reparación";
            BODY_MEDIDAS.innerText = "de Medidas de Capacidad";
            BODY_ASESORAMIENTO.innerText = "Asesoramiento de normas de calidad ISO";
    }
}