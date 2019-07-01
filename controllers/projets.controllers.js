const { getProjets, createProjet } = require("../queries/projets.queries");

exports.listProjets = async (req, res, next) => {
  try {
    const projets = await getProjets();
    console.log(projets);
    res.render("projets/projets", { projets });
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
