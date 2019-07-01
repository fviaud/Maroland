const router = require("express").Router();
const { ensureAuthenticated } = require("../config/guards.config");
const projets = require("./projets.routes");
const users = require("./users.routes");
const auth = require("./auth.routes");

router.use("/auth", auth);
router.use("/users", users);
router.use("/projets", ensureAuthenticated, projets);
router.get("/", (req, res) => {
  res.redirect("/projets");
});

module.exports = router;
