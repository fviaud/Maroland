const Projet = require("../database/models/projet.model");

exports.getProjet = projetId => {
  return Projet.findOne({ _id: projetId }).exec();
};

exports.getProjets = () => {
  return Projet.find()
    .populate("auteur")
    .exec();
};

exports.createProjet = projet => {
  const newProjet = new Projet(projet);
  return newProjet.save();
};
