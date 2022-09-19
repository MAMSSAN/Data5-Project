const mongoose = require("mongoose");
const Joi = require("joi");

const OffreSchema = new mongoose.Schema({
  nom: {
    type: String,
  },

  date_debut: {
    type: Number,
  },
  date_fin: {
    type: String,
  },
  details: [],
});

const offre = mongoose.model("Offre", OffreSchema);

function validateOffre(offre) {
  const schema = Joi.object({
    nom: Joi.string().required(),

    date_debut: Joi.date.required(),
    date_fin: Joi.date.required(),
    details: Joi.array.required(),
  });

  return schema.validate(offre);
}

exports.OFFRE = offre;
exports.validate = validateOffre;
