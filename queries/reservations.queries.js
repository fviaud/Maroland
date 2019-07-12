const Reservation = require("../database/models/reservation.model");

exports.getReservation = reservationId => {
  return Reservation.findOne({ _id: reservationId }).exec();
};

exports.getReservations = () => {
  return Reservation.find()
    .populate("projet")
    .exec();
};

exports.createReservation = reservation => {
  const newReservation = new Reservation(reservation);
  return newReservation.save();
};

exports.getReservationsFromProjetId = projetId => {
  console.log(projetId);
  return Reservation.find({ auteur: projetId })
    .populate("auteur")
    .exec();
};
