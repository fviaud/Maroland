window.addEventListener("DOMContentLoaded", () => {
  bindObjet();
});

function bindObjet() {
  const elements = document.querySelectorAll(".projet");
  const reservationsContainer = document.querySelector(
    "#reservation-list-container"
  );

  elements.forEach(e => {
    e.addEventListener("click", $event => {
      const projetId = $event.target.getAttribute("projetId");
      axios
        .get("/reservations/list/" + projetId)
        .then(function(response) {
          reservationsContainer.innerHTML = response.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    });
  });
}
