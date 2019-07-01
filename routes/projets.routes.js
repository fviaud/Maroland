const router = require("express").Router();
const {
  listProjets,
  newProjet,
  addProjet
} = require("../controllers/projets.controllers");

router.get("/", listProjets);
router.get("/new", newProjet);
router.post("/", addProjet);
module.exports = router;
