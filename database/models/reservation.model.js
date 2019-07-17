const mongoose = require("mongoose");
const schema = mongoose.Schema;

const reservationSchema = schema(
  {
    nom: {
      type: String,
      required: [true, "On doit preciser un nom de reservation !"]
    },
    projet: {
      type: schema.Types.ObjectId,
      ref: "projet",
      required: true
    }
  },
  { timestamps: { createdAt: "creation", updatedAt: "maj" } }
);
const Reservation = mongoose.model("reservations", reservationSchema);

module.exports = Reservation;
