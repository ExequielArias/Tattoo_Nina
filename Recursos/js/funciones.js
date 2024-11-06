//FUNCIONES
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
        src="../Imagenes/carrito.png"
        alt="Icono carrito compras"
    />
            Agregar carrito
        </button>
    </article>
    `
    })
    // console.log(contenidoHTML);
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
        <article>
                <ul>
                    <li>${producto.nombre}</li>
                    <div>
                        <button class = "eliminar-prod"><img src="../Imagenes/delete.png" alt=""></button>
                    </div>
                    <li>$ ${producto.precio}</li>
                    
                </ul>
                
        </article>
        <hr>
    `
    })
    contenedorProductos.innerHTML = contenidoHTML;

}

export function renderizarPiercing(arregloPiercing, contenedorPiercing) {
    let contenidoHTML = '';
    arregloPiercing.forEach((piercing) => {
        contenidoHTML += ` 
    <article class="piercing">
        <figure class="piercing__fig">
            <img src="${piercing.imagen}" alt="Nombre" />
        </figure>
    `
    })
    contenedorPiercing.innerHTML = contenidoHTML;
}