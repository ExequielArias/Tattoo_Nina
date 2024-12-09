//FUNCIONES
import { eliminarProductoDelCarro } from "./insumos.js";
export function renderizarProductos(arregloProductos, contenedorProductos) {
    let contenidoHTML = '';
    arregloProductos.forEach((producto) => {
        contenidoHTML += ` 
    <article class="productos">
        <figure class="productos__fig">
            <img src="${producto.imagen}" alt="${producto.nombre}" />
        </figure>
        <div class="productos__datos">
            <h3>${producto.nombre}</h3>
            <div> $ ${producto.precio}</div>
        </div>
        <button
            class="productos__boton"
            data-btn-carro
            data-id="${producto.id}"
        >
        <img
        src="../recursos/imagenes/carrito.png"
        alt="Icono carrito compras"
    />
            Agregar carrito
        </button>
    </article>
    `
    })
    contenedorProductos.innerHTML = contenidoHTML;
    
}

export function renderizarProductosEnCarro(arregloProductos, arregloCarro, contenedorProductos) {   

    const productosFiltrados = arregloProductos.filter((producto) => {
        return arregloCarro.includes(parseInt(producto.id))
    })
    let total = 0; 
    let contenidoHTML = '';
    productosFiltrados.forEach((producto) => {
        total += parseFloat(producto.precio)
        contenidoHTML += ` 
        <article id="producto${producto.id}">
            <ul>
                <li>${producto.nombre}</li>
                <div class="divisor">
                <button
                    class="eliminar-prod"
                    data-btn-elimiar
                    data-id="${producto.id}"
                >
                <img src="../recursos/imagenes/delete.png" alt="boton_eliminar">
                </button>
                </div>
                <li>$ ${producto.precio}</li>
            </ul>
            <hr>
        </article>
        `
        contenedorProductos.innerHTML = contenidoHTML;
    })
    const botonesEliminar = document.querySelectorAll('[data-btn-elimiar]')
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", () => {
            const idProducto = parseInt(boton.dataset.id);
            eliminarProductoDelCarro(idProducto);
        });
    });
}
