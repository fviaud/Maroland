const router = require("express").Router();
const {
  listReservations,
  newReservation,
  addReservation
} = require("../controllers/reservations.controllers");

router.get("/new/:projetId", newReservation);
router.get("/:projetId", listReservations);
router.post("/:projetId", addReservation);
module.exports = router;
