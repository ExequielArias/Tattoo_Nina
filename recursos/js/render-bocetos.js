export function renderizadoBocetos(arregloBocetos, contenedorBocetos) {
    let contenidoHTML = '';
    arregloBocetos.forEach((Boceto) => {
        contenidoHTML += `
    <article class="bocetos">
        <figure class="Bocetos_fig">
            <img src="${Boceto.imagen}" alt="Bocetos"/>
        </figure>
    </article>
    `
    })
    contenedorBocetos.innerHTML = contenidoHTML;
}