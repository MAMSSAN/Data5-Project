const mongoose = require("mongoose");
const Joi = require("joi");

const ReservationSchema = mongoose.Schema({
  terrain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Terrain",
  },
  joueur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Joueur",
  },
  id_centre: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

exports.Reservation = Reservation;
