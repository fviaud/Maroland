const mongoose = require("mongoose");
const schema = mongoose.Schema;

const projetSchema = schema({
  nom: {
    type: String,
    required: [true, "On doit preciser un nom de projet !"]
  },
  description: {
    type: String,
    required: [true, "On doit saisir un descriptif du projet"]
  },
  auteur: {
    type: schema.Types.ObjectId,
    ref: "user",
    required: true
  }
});
const Projet = mongoose.model("projet", projetSchema);

module.exports = Projet;
