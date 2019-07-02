const { getProjets, createProjet } = require("../queries/projets.queries");

const apiProjetMap = p => ({
  titre: p.nom,
  details: p.description,
  auteur: p.auteur.username
});

exports.listProjets = async (req, res, next) => {
  try {
    const data = await getProjets();
    const projets = data.map(apiProjetMap);
    res.render("projets/projets", { projets });
    //res.json(projets);
  } catch (e) {
    next(e);
  }
};

exports.newProjet = async (req, res, next) => {
  try {
    res.render("projets/projet-form");
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
    res.status(400).render("projets/projet-form", { errors });
  }
};
