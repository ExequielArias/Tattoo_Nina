//-------------------------------------------------------------------------------INSUMOS-----------------------------------------------------------------------------------------
import { renderizarProductos, renderizarProductosEnCarro } from "./render-insumos.js";
const contenedor = document.getElementById("contenedor-productos");
const contenedorCarro = document.getElementById("contenedor-carro");

//REFERENCIAMOS EL POPUP
const popupCarro = document.getElementById('popup-carro');
const abrirPopupCarro = document.getElementById("abrir-carro");


//ABRIR Y CERRAR EL POPUP
const manejadorPopup = () => {
    if (popupCarro.open) {
        popupCarro.close();
    } else {
        popupCarro.showModal()
    }
}
abrirPopupCarro.addEventListener("click", manejadorPopup)

//REFERENCIAMOS EL NOTIFICADOR DE LA COMPRA
const notificador = document.getElementById("notificador")
const compras = document.getElementById("botonCompras")

//NOTIFICA QUE LA COMPRA SE REALIZO
const notificadorCompra = () => {
    if (notificador.open) {
        notificador.close();
    } else {
        let contenidoHTML = '';
        const contadorCarro = document.getElementById("cant-items");
        contadorCarro.textContent = 0
        const elemento = document.getElementById('contenedor-carro');
        const html = elemento.outerHTML;
        contenidoHTML+=` <article>
        <ul>
        <li>Carrito vacio</li>
        </ul>
        </article>`
        const nuevoHTML = html.replace(html, contenidoHTML);
        elemento.innerHTML = nuevoHTML;
        productosEnCarro.length = 0;
        notificador.showModal()
    }
}
compras.addEventListener("click", notificadorCompra)

// BOTON VACIAR CARRITO
const botonVaciar = document.getElementById("botonVaciar")
const vaciarCarrito = () => {
    let contenidoHTML = '';
    const contadorCarro = document.getElementById("cant-items");
    contadorCarro.textContent = 0
    productosEnCarro.length = 0;
    const elemento = document.getElementById('contenedor-carro');
    const html = elemento.outerHTML;
    contenidoHTML+=` <article>
    <ul>
    <li>Carrito vacio</li>
    </ul>
    </article>`
    const nuevoHTML = html.replace(html, contenidoHTML);
    elemento.innerHTML = nuevoHTML;
}
botonVaciar.addEventListener("click", vaciarCarrito)


//ARREGLO QUE SE ENCARGA DE ALMACENAR LOS ID DE LOS PRODUCTOS 
const productosEnCarro = [];

//PONER A ESCUCHAR LOS BOTONES
fetch('/recursos/json/tienda-insumos.json')
.then(response => response.json())
.then(data => {
    renderizarProductos(data, contenedor);
    const elementosProductos = document.querySelectorAll('[data-btn-carro]')
    elementosProductos.forEach(elemento => {
        elemento.addEventListener("click", () => {
            productosEnCarro.push(parseInt(elemento.dataset.id));
            //RENDERIZAR EL CARRO
            const contenedorCarro = document.getElementById('contenedor-carro');
            renderizarProductosEnCarro(data, productosEnCarro, contenedorCarro);
            //ACTUALIZAR CANTIDAD ITEMS EN EL CARRO
            const contadorCarro = document.getElementById("cant-items");
            contadorCarro.textContent = productosEnCarro.length
        })
    })
});
//BOTON ELIMINAR
export const eliminarProductoDelCarro = (idProducto) => {
    const index = productosEnCarro.indexOf(idProducto);
    if (index !== -1) {
        productosEnCarro.splice(index, 1);
        const elemento = document.querySelector('#producto'+idProducto);
        const html = elemento.outerHTML;
        const nuevoHTML = html.replace(html, '');
        elemento.innerHTML = nuevoHTML;
        const contadorCarro = document.getElementById("cant-items");
        contadorCarro.textContent = productosEnCarro.length
    }
}



