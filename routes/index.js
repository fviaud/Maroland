const router = require("express").Router();
const projets = require("./projets.routes");

router.use("/projets", projets);
router.get("/", (req, res) => {
  res.redirect("/projets");
});

module.exports = router;
