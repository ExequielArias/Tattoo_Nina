import { renderizarPiercing } from "./funciones.js";
import { TiendaPiercings } from "./piercings.js";

const contenedor = document.getElementById("contenedor-piercing");
renderizarPiercing(TiendaPiercings.piercings, contenedor);