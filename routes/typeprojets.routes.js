const router = require("express").Router();
const {
  listTypeProjets,
  newTypeProjet,
  addTypeProjet
} = require("../controllers/typeprojets.controllers");

router.get("/", listTypeProjets);
router.get("/new/", newTypeProjet);
router.post("/", addTypeProjet);
module.exports = router;
