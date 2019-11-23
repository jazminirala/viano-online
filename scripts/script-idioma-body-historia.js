const BODY_NUESTRA = document.getElementById("nuestra");
const BODY_HISTORIA = document.getElementById("historia");
const BODY_PARRAFO_1 = document.getElementById("parrafo1");
const BODY_PARRAFO_2 = document.getElementById("parrafo2");
const BODY_PARRAFO_3 = document.getElementById("parrafo3");

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
            BODY_NUESTRA.innerText = "About";
            BODY_HISTORIA.innerText = "Us";
            BODY_PARRAFO_1.innerText = "We are a young organization headed by two partners, which combines knowledge in quality systems and the repair of measuring instruments ";
            BODY_PARRAFO_2.innerText = "We have extensive experience in the main automotive companies and factories of measuring instruments. In addition to extensive knowledge in robotics and measuring machines.";
            BODY_PARRAFO_3.innerText = "The development of capacity measures is a combination of Design, Sustainability and Professional Development of Us.";
            break;

        case "esp":
            BODY_NUESTRA.innerText = "Nuestra";
            BODY_HISTORIA.innerText = "Historia";
            BODY_PARRAFO_1.innerText = "Somos una organización joven encabezada por dos socios, combinando conocimientos en sistemas de calidad y reparación de instrumentos de medición.";
            BODY_PARRAFO_2.innerText = "Contamos con amplia trayectoria en empresas líderes automotrices y fábricas de instrumentos de medición. Además de amplíos conocmientos en robótica y en máquinas de medir.";
            BODY_PARRAFO_3.innerText = "El desarrollo de las medidas de capacidad es una combinación de Diseño, Sustentabilidad y desarrollo profesional de Nosotros. ";
    }
}