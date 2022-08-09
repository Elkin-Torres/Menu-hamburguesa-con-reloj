import hamburguerMenu from "./menu_hamburguesa.js";
import { mostrar, sonarAlarma } from "./reloj.js";
import { shortcuts } from "./atajos.js";
import { movement } from "./movimiento_pelota.js";
import { conteo } from "./conteo.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  mostrar("#time", "#mostrarReloj", "#ocultarReloj");
  sonarAlarma("assets/alarma.mp3", "#iniciarAlarma", "#detenerAlarma");
  conteo("Dec 31 2022 23:59:59 GMT-0500");
  
});

d.addEventListener("keydown", (e)=>{
  shortcuts(e);
  movement(e, "pelota", "campo");
})


