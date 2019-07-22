const {
  getTypeProjets,
  createtypeprojet
} = require("../queries/typeProjets.queries");

exports.listTypeProjets = async (req, res, next) => {
  try {
    const typeProjets = await getTypeProjets();
    res.render("projets/projets", {
      typeProjets
    });
    //res.json(projets);
  } catch (e) {
    next(e);
  }
};

exports.newTypeProjet = async (req, res, next) => {
  try {
    res.render("projets/typeprojet-form");
  } catch (e) {
    next(e);
  }
};

exports.addTypeProjet = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    await createtypeprojet({ ...body });
    res.redirect("/projets/");
  } catch (e) {
    const errors = Object.keys(e.errors).map(key => e.errors[key].message);
    res.status(400).render("typeProjets/typeProjet-form", { errors });
  }
};
