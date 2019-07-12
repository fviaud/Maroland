const router = require("express").Router();
const {
  listReservations,
  newReservation,
  addReservation
} = require("../controllers/reservations.controllers");

router.get("/", listReservations);
router.get("/new", newReservation);
router.post("/", addReservation);
module.exports = router;
