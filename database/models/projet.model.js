const mongoose = require("mongoose");
const schema = mongoose.Schema;

const projetSchema = schema(
  {
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
    },
    type: {
      type: schema.Types.ObjectId,
      ref: "typeProjet",
      required: true
    },
    basicat: {
      type: String,
      required: [true, "On doit saisir un basicat du projet"]
    }
  },
  { timestamps: { createdAt: "creation", updatedAt: "maj" } }
);

const Projet = mongoose.model("projet", projetSchema);
module.exports = Projet;
