import { renderizarPiercing } from "./render-piercing.js";
fetch('/recursos/json/tienda-piercings.json')
.then(response => response.json())
.then(data => {
    const contenedor = document.getElementById("contenedor-piercing");
    renderizarPiercing(data, contenedor);
});