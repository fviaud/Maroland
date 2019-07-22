const mongoose = require("mongoose");
const schema = mongoose.Schema;

const typeProjetSchema = schema({
  nom: {
    type: String,
    required: [true, "On doit preciser un nom de type de projet !"]
  },
  description: {
    type: String,
    required: [true, "On doit saisir un descriptif du type projet"]
  }
});

const TypeProjet = mongoose.model("typeProjet", typeProjetSchema);
module.exports = TypeProjet;
