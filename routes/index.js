const router = require("express").Router();
const { ensureAuthenticated } = require("../config/guards.config");
const projets = require("./projets.routes");
const reservations = require("./reservations.routes");
const typeProjets = require("./typeprojets.routes");
const users = require("./users.routes");
const auth = require("./auth.routes");

router.use("/auth", auth);
router.use("/users", users);
router.use("/projets", ensureAuthenticated, projets);
router.get("/", (req, res) => {
  res.redirect("/projets");
});

router.use("/reservations", ensureAuthenticated, reservations);
router.use("/typeProjets", ensureAuthenticated, typeProjets);

module.exports = router;
