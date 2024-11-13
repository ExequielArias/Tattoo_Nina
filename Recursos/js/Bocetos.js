import { tiendaBocetos } from "./Tienda-Bocetos.js";
import { RenderizadoBocetos } from "./funciones.js";

const contenedor = document.getElementById('contenedor-Bocetos');

RenderizadoBocetos(tiendaBocetos.Bocetos, contenedor);