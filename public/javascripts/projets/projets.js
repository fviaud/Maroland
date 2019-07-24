window.addEventListener("DOMContentLoaded", () => {
  bindObjet();
});

function bindObjet() {
  const elements = document.querySelectorAll(".reservations");
  const reservationsContainer = document.querySelector("#data");
  elements.forEach(e => {
    e.addEventListener("click", $event => {
      const projetId = $event.target.getAttribute("projetId");
      reservationsContainer.innerHTML = "Actualisation en cours ";
      axios
        .get("/reservations/" + projetId)
        .then(function(response) {
          reservationsContainer.innerHTML = response.data;
        })
        .then(function(response) {
          document
            .querySelector("#BtNewReservation")
            .addEventListener("click", $event => {
              reservationsContainer.innerHTML = "Actualisation en cours";
              const projetId = $event.target.getAttribute("projetId");
              axios
                .get("/reservations/new/" + projetId)
                .then(function(response) {
                  reservationsContainer.innerHTML = response.data;
                })
                .catch(function(err) {
                  console.log(err);
                });
            });
        })
        .catch(function(err) {
          console.log(err);
        });
    });
  });

  document.querySelector("#BtNewProjet").addEventListener("click", $event => {
    reservationsContainer.innerHTML = "Actualisation en cours";
    axios
      .get("/projets/new/")
      .then(function(response) {
        reservationsContainer.innerHTML = response.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  });

  const projets = document.querySelectorAll(".projets");
  projets.forEach(e => {
    e.addEventListener("click", $event => {
      const projetId = $event.target.getAttribute("projetId");
      reservationsContainer.innerHTML = "Actualisation en cours ";
      axios.get("/projets/edit/" + projetId).then(function(response) {
        reservationsContainer.innerHTML = response.data;
      });
    });
  });
}
