const d = document;

export function sorteo (btn,lenguaje){
  
 const sorteando = (lenguaje) => {
   const $lenguajes = d.querySelectorAll(lenguaje),
   aleatorio = Math.floor(Math.random()*$lenguajes.length),
  obtenerLenguaje = $lenguajes[aleatorio];
  
  return `El lenguaje ganador es ${obtenerLenguaje.textContent}`;
 };

 d.addEventListener("click", (e)=>{
  if(e.target.matches(btn)){
    let result = sorteando(lenguaje);
    alert(result);
  }
 })
}

