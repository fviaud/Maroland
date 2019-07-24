const router = require("express").Router();
const {
  listProjets,
  newProjet,
  addProjet,
  projetEdit
} = require("../controllers/projets.controllers");

router.get("/", listProjets);
router.get("/new", newProjet);
router.post("/", addProjet);
router.get("/edit/:projetId", projetEdit);
module.exports = router;
