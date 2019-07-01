const router = require("express").Router();
const {
  listProjets,
  addProjet
} = require("../controllers/projets.controllers");

router.get("/", listProjets);
router.get("/new", addProjet);
module.exports = router;
