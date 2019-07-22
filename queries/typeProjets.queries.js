const TypeProjet = require("../database/models/typeProjet.model");

exports.getTypeProjet = typeProjetId => {
  return TypeProjet.findOne({ _id: typeProjetId }).exec();
};

exports.getTypeProjets = () => {
  return TypeProjet.find().exec();
};

exports.createtypeprojet = typeProjet => {
  const newtypeProjet = new TypeProjet(typeProjet);
  return newtypeProjet.save();
};
