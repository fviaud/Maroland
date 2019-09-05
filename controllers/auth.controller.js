const passport = require("passport");

exports.signinForm = (req, res, next) => {
  res.render("auth/auth-form", {
    errors: null,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
    forconnexion: true
  });
};

exports.signin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      next(err);
    } else if (!user) {
      res.render("auth/auth-form", {
        errors: ["Pas d'utilisateur avec ce login ou mauvais mot de passe."],
        isAuthenticated: req.isAuthenticated(),
        currentUser: req.user
      });
    } else {
      req.login(user, err => {
        if (err) {
          next(err);
        } else {
          res.redirect("/");
        }
      });
    }
  })(req, res, next);
};

exports.signout = (req, res, next) => {
  req.logout();
  res.redirect("/auth/signin/form");
};
