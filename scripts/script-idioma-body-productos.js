const BODY_PRODUCTO = document.getElementById("producto");
const BODY_MARCA = document.getElementById("marca");
const BODY_DAMAR = document.getElementById("modelo");


if (localStorage.getItem("idioma") !== null || localStorage.getItem("idioma") !== undefined) {
    MENU_SELECT_IDIOMA.value = localStorage.getItem("idioma");
    cambiarIdiomaBodyProductos(MENU_SELECT_IDIOMA.value);
}
MENU_SELECT_IDIOMA.addEventListener("change", (e) => {
    if (MENU_SELECT_IDIOMA.value == "eng") {
        localStorage.setItem("idioma", "eng");
        cambiarIdiomaBodyProductos("eng");
    } else if (MENU_SELECT_IDIOMA.value == "esp") {
        localStorage.setItem("idioma", "esp");
        cambiarIdiomaBodyProductos("esp")
    }
})

function cambiarIdiomaBodyProductos(idioma) {
    switch (idioma) {
        case "eng":
            BODY_PRODUCTO.innerText = "Product"
            BODY_MARCA.innerText = "Brand: VIANO"
            BODY_DAMAR.innerText = "Model: DAMAR"

            break;
        case "esp":
            BODY_PRODUCTO.innerText = "Producto"
            BODY_MARCA.innerText = "Marca: VIANO"
            BODY_DAMAR.innerText = "Modelo: DAMAR"
    }
}