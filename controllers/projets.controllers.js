exports.listProjets = async (req, res, next) => {
  try {
    res.render("projets/projets");
  } catch (e) {
    next(e);
  }
};

exports.addProjet = async (req, res, next) => {
  try {
    res.render("projets/projet-form");
  } catch (e) {
    next(e);
  }
};
