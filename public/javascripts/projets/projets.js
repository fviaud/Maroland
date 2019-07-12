window.addEventListener("DOMContentLoaded", () => {
  bindObjet();
});

function bindObjet() {
  const elements = document.querySelectorAll(".projet");

  elements.forEach(e => {
    e.addEventListener("click", $event => {
      const projetId = $event.target.getAttribute("projetId");
      const reservationsContainer = document.querySelector(
        "#reservation-list-container"
      );
      axios
        .get("/reservations/" + projetId)
        .then(function(response) {
          reservationsContainer.innerHTML = response.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    });
  });
}
