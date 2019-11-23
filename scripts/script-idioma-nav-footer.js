//Nav
const MENU_INICIO = document.getElementById("inicio");
const MENU_HISTORIA = document.getElementById("nuestra-historia");
const MENU_PRODUCTOS = document.getElementById("productos-servicios");
const MENU_CERTIFICACIONES = document.getElementById("certificaciones");
const MENU_RUMP = document.getElementById("rump");
const MENU_INTI = document.getElementById("inti");
const MENU_CONTACTO = document.getElementById("contacto");
const MENU_ESPAÑOL = document.getElementById("español");
const MENU_INGLES = document.getElementById("ingles");
const MENU_SELECT_IDIOMA = document.getElementById("selector-idiomas");
//Footer
const FOOTER_CONTACTO = document.getElementById("footer-contacto");
const FOOTER_PARTIDO = document.getElementById("footer-partido");
const FOOTER_CP = document.getElementById("footer-cp");

if (localStorage.getItem("idioma") !== null || localStorage.getItem("idioma") !== undefined) {
    MENU_SELECT_IDIOMA.value = localStorage.getItem("idioma");
    cambiarIdiomaNavFooter(MENU_SELECT_IDIOMA.value);
}
MENU_SELECT_IDIOMA.addEventListener("change", (e) => {
    if (MENU_SELECT_IDIOMA.value == "eng") {
        localStorage.setItem("idioma", "eng");
        cambiarIdiomaNavFooter("eng");
    } else if (MENU_SELECT_IDIOMA.value == "esp") {
        localStorage.setItem("idioma", "esp");
        cambiarIdiomaNavFooter("esp")
    }
})

function cambiarIdiomaNavFooter(idioma) {
    switch (idioma) {
        case "eng":
            MENU_INICIO.innerText = "Home";
            MENU_HISTORIA.innerText = "About";
            MENU_PRODUCTOS.innerText = "Products and Services";
            MENU_CERTIFICACIONES.innerText = "Certifications"
            MENU_RUMP.innerText = "RUMP Registration Minsitry of Production";
            MENU_INTI.innerText = "Audited Repairman by INTI Legarl Meotology";
            MENU_CONTACTO.innerText = "Contact";
            MENU_ESPAÑOL.innerText = "esp";
            MENU_INGLES.innerText = "eng";


            FOOTER_CONTACTO.innerText = "Contact";
            FOOTER_PARTIDO.innerText = "La Matanza District";
            FOOTER_CP.innerText = "Zip Code 1754- Buenos Aires Province.";

            break;

        case "esp":
            MENU_INICIO.innerText = "Inicio";
            MENU_HISTORIA.innerText = "Nuestra Historia";
            MENU_PRODUCTOS.innerText = "Productos y Servicios";
            MENU_CERTIFICACIONES.innerText = "Certificaciones"
            MENU_RUMP.innerText = "Inscripción RUMP Ministerio de Producción";
            MENU_INTI.innerText = "Reparador Auditado por Meteología Legal";
            MENU_CONTACTO.innerText = "Contacto";

            FOOTER_CONTACTO.innerText = "Contacto";
            FOOTER_PARTIDO.innerText = "Partido de la Matanza";
            FOOTER_CP.innerText = "CP 1754- Provincia de Buenos Aires";

    }
}