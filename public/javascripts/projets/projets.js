window.addEventListener("DOMContentLoaded", () => {
  bindObjet();
});

function bindObjet() {
  const elements = document.querySelectorAll(".projet");

  elements.forEach(e => {
    e.addEventListener("click", $event => {
      const projetId = $event.target.getAttribute("projetId");
      alert(projetId);
      $event.stopPropagation();
    });
  });
}
