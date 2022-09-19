const Joi = require("joi");
const mongoose = require("mongoose");

const JoueurSchema = new mongoose.Schema({
  nom: {
    type: String,
    maxlength: 20,
  },

  prenom: {
    type: String,
    maxlength: 20,
  },

  email: {
    type: String,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },

  password: {
    type: String,
    minlength: 5,
    maxlength: 1024,
  },

  gender: {
    type: String,
    maxlength: 20,
  },

  date_naissance: {
    type: Date,
  },

  weight: {
    type: Number,
  },

  height: {
    type: Number,
  },

  telephone: {
    type: Number,
  },

  deleted: {
    type: Boolean,
  },

  roles: [],
  parrain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trophee",
  },
});

const Joueur = mongoose.model("Joueur", JoueurSchema);

function validateUser(joueur) {
  const schema = Joi.object({
    nom: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(joueur);
}

exports.Joueur = Joueur;
exports.validate = validateUser;
