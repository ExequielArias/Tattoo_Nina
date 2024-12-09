import { renderizadoBocetos } from "./render-bocetos.js";
fetch('/recursos/json/tienda-bocetos.json')
.then(response => response.json())
.then(data => {
    const contenedor = document.getElementById('contenedor-Bocetos');
    renderizadoBocetos(data, contenedor);    
});