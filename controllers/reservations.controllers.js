const {
  getReservations,
  createReservation
} = require("../queries/reservations.queries");

const apiObjetMap = r => ({
  id: r._id,
  nom: r.nom
  //projetId: r.projet._id,
  //projet: r.projet.nom
});

exports.listReservations = async (req, res, next) => {
  try {
    const data = await getReservations();
    const reservations = data.map(apiObjetMap);
    res.render("reservations/reservations", {
      reservations,
      projetId: req.params.projetId
    });
    //res.json(projets);
  } catch (e) {
    next(e);
  }
};

exports.newReservation = async (req, res, next) => {
  try {
    res.render("reservations/reservation-form", {
      projetId: req.params.projetId
    });
  } catch (e) {
    next(e);
  }
};

exports.addReservation = async (req, res, next) => {
  try {
    const body = req.body;
    await createReservation({ ...body, auteur: req.params.projetId });
    res.redirect("/projets/");
  } catch (e) {
    const errors = Object.keys(e.errors).map(key => e.errors[key].message);
    res.status(400).render("reservations/reservation-form", { errors });
  }
};
