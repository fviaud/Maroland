const express = require("express");
const morgan = require("morgan");
const path = require("path");

const index = require("./routes");

require("./database");

const app = express();
exports.app = app;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

require("./config/session.config");
require("./config/passport.config");

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(index);

app.listen(8080);
