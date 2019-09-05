const router = require("express").Router();
const {
  listProjets,
  newProjet,
  addProjet,
  projetEdit,
  projetUpdate,
  projetDelete
} = require("../controllers/projets.controllers");

router.get("/", listProjets);
router.get("/new", newProjet);
router.post("/", addProjet);
router.get("/edit/:projetId", projetEdit);
router.post("/update/:projetId", projetUpdate);
router.get("/delete/:projetId", projetDelete);
module.exports = router;
