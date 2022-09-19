const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
  emailJoueur: {
    type: String,
  },
  idBoitier: {
    type: Number,
  },
  equipe: {
    type: String,
  },
});

const Session = mongoose.model("Session", SessionSchema);

exports.Session = Session;
