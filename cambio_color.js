const d = document;

export function cambioColor(btnCambio) {
  let sun = "☀️",
    moon = "🌙";
  const $btnCambio = d.querySelector(btnCambio);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnCambio)) {
      d.body.classList.toggle("dark");
      if ($btnCambio.textContent === sun) {
        $btnCambio.textContent = moon;
      } else {
        $btnCambio.textContent = sun;
      }
    }
  });
}
