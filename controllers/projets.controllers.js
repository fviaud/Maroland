const {
  getProjet,
  getProjets,
  createProjet,
  updateProjet,
  deleteProjet
} = require("../queries/projets.queries");
const { getTypeProjets } = require("../queries/typeProjets.queries");
var moment = require("moment");

const apiProjetMap = p => ({
  id: p._id,
  titre: p.nom,
  details: p.description,
  auteurId: p.auteur._id,
  auteur: p.auteur.username,
  creation: p.creation,
  type: p.type.nom
});

exports.listProjets = async (req, res, next) => {
  try {
    const data = await getProjets();
    const projets = data.map(apiProjetMap);
    res.render("projets/projets", {
      isAuthenticated: req.isAuthenticated(),
      projets,
      moment
    });
    //res.json(projets);
  } catch (e) {
    next(e);
  }
};

exports.newProjet = async (req, res, next) => {
  try {
    const typeprojets = await getTypeProjets();
    res.render("projets/projet-form", {
      projet: {},
      typeprojets
    });
  } catch (e) {
    next(e);
  }
};

exports.addProjet = async (req, res, next) => {
  try {
    const body = req.body;
    await createProjet({ ...body, auteur: req.user._id });
    res.redirect("/projets");
  } catch (e) {
    const errors = Object.keys(e.errors).map(key => e.errors[key].message);
    const typeprojets = await getTypeProjets();
    res.status(400).render("projets/projet-form", { errors, typeprojets });
  }
};

exports.projetEdit = async (req, res, next) => {
  try {
    const typeprojets = await getTypeProjets();
    const projetId = req.params.projetId;
    const projet = await getProjet(projetId);
    res.render("projets/projet-form", {
      projet,
      typeprojets
    });
  } catch (e) {
    next(e);
  }
};

exports.projetUpdate = async (req, res, next) => {
  const projetId = req.params.projetId;
  try {
    const body = req.body;
    await updateProjet(projetId, body);
    res.redirect("/projets");
  } catch (e) {
    const typeprojets = await getTypeProjets();
    const errors = Object.keys(e.errors).map(key => e.errors[key].message);
    const projet = await getProjet(projetId);
    res.status(400).render("projets/projet-form", {
      errors,
      projet,
      typeprojets,
      isAuthenticated: req.isAuthenticated()
    });
  }
};

exports.projetDelete = async (req, res, next) => {
  try {
    const projetId = req.params.projetId;
    await deleteProjet(projetId);
    res.redirect("/projets");
  } catch (e) {
    next(e);
  }
};
