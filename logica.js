import hamburguerMenu from "./menu_hamburguesa.js";
import { mostrar, sonarAlarma } from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  mostrar("#time", "#mostrarReloj", "#ocultarReloj");
  sonarAlarma("assets/alarma.mp3" ,"#iniciarAlarma", "#detenerAlarma");
});
