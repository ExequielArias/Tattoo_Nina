//-------------------------------------------------------------------------------INSUMOS-----------------------------------------------------------------------------------------
import { tienda } from "./tienda.js";
import { renderizarProductos, renderizarProductosEnCarro } from "./funciones.js";
const contenedor = document.getElementById("contenedor-productos");
//INVOCAR
renderizarProductos(tienda.productos, contenedor);

//REFERENCIAMOS EL POPUP
const popupCarro = document.getElementById('popup-carro');
const abrirPopupCarro = document.getElementById("abrir-carro");

// console.log(popupCarro.open);
const manejadorPopup = () => {
    if (popupCarro.open) {
        popupCarro.close();
    } else {
        popupCarro.showModal()
    }
}
abrirPopupCarro.addEventListener("click", manejadorPopup)


//ARREGLO QUE SE ENCARGA DE ALMACENAR LOS ID DE LOS PRODUCTOS 
const productosEnCarro = [];


//PONER A ESCUCHAR LOS BOTONES
const elementosProductos = document.querySelectorAll('[data-btn-carro]')
elementosProductos.forEach(elemento => {
    elemento.addEventListener("click", () => {
        // console.log(elemento.dataset.id);
        productosEnCarro.push(parseInt(elemento.dataset.id));
        //RENDERIZAR EL CARRO
        const contenedorCarro = document.getElementById('contenedor-carro');
        renderizarProductosEnCarro(tienda.productos, productosEnCarro, contenedorCarro);
        //ACTUALIZAR CANTIDAD ITEMS EN EL CARRO
        const contadorCarro = document.getElementById("cant-items");
        contadorCarro.textContent = productosEnCarro.length
        //ASIGNAR ESCUCHADORES 
        //........



    })
})