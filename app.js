const express = require("express");
const morgan = require("morgan");
const path = require("path");

const index = require("./routes");
const app = express();

require("./database");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(index);

app.listen(8080);
