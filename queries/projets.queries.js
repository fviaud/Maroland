const Projet = require("../database/models/projet.model");

exports.getProjet = projetId => {
  return Projet.findOne({ _id: projetId }).exec();
};

exports.getProjets = () => {
  return Projet.find()
    .populate("auteur")
    .populate("type")
    .exec();
};

exports.createProjet = projet => {
  const newProjet = new Projet(projet);
  return newProjet.save();
};

exports.updateProjet = (projetId, projet) => {
  return Projet.findByIdAndUpdate(
    projetId,
    { $set: projet },
    { runValidators: true }
  );
};

exports.deleteProjet = projetId => {
  return Projet.findByIdAndDelete(projetId).exec();
};
