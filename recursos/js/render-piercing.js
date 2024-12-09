export function renderizarPiercing(arregloPiercing, contenedorPiercing) {
    let contenidoHTML = '';
    arregloPiercing.forEach((piercing) => {
        contenidoHTML += ` 
    <article class="piercing">
        <figure class="piercing__fig">
            <img src="${piercing.imagen}" alt="Piercings"/>
        </figure>
    </article>
    `
    })
    contenedorPiercing.innerHTML = contenidoHTML;
}

