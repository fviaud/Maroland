const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://dev:dev@cluster0-live8.gcp.mongodb.net/maroland?retryWrites=true",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("connexion db ok !"))
  .catch(err => console.log(err));
