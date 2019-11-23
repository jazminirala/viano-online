const BODY_INSCRIPCION = document.getElementById("inscripcion");
const BODY_MINISTERIO = document.getElementById("ministerio");
const BODY_PARRAFO = document.getElementById("parrafo");


if (localStorage.getItem("idioma") !== null || localStorage.getItem("idioma") !== undefined) {
    MENU_SELECT_IDIOMA.value = localStorage.getItem("idioma");
    cambiarIdiomaBodyRump(MENU_SELECT_IDIOMA.value);
}
MENU_SELECT_IDIOMA.addEventListener("change", (e) => {
    if (MENU_SELECT_IDIOMA.value == "eng") {
        localStorage.setItem("idioma", "eng");
        cambiarIdiomaBodyRump("eng");
    } else if (MENU_SELECT_IDIOMA.value == "esp") {
        localStorage.setItem("idioma", "esp");
        cambiarIdiomaBodyRump("esp")
    }
})


function cambiarIdiomaBodyRump(idioma) {
    switch (idioma) {
        case "eng":
            BODY_INSCRIPCION.innerText = "RUMP Registration";
            BODY_MINISTERIO.innerText = "Ministry of Production";
            BODY_PARRAFO.innerText = "Viano, Measurement of capacity is registered as supplier repairman and asmanufacturer and repairer of capacity measurements under the number of R.U.M.P. RL-2018 according to the requirements established by the Ministry of Production of the Argentine Republic.";
            break;

        case "esp":
            BODY_INSCRIPCION.innerText = "Inscripción RUMP";
            BODY_MINISTERIO.innerText = "Ministerio de Producción";
            BODY_PARRAFO.innerText = "Viano, Medida de capacidad se encuentra inscripto como reparador de surtidores y como fabricante y reparador de medidas de capacidad bajo el número de R.U.M.P. RL-2018 de acuerdo a los requisitos establecidos por el Ministerio de Producción de la República Argentina.  ";
    }
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("certificado1");
var img2 = document.getElementById("certificado2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}