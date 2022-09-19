const mongoose = require("mongoose");
const Joi = require("joi");

const ParrainageSchema = new mongoose.Schema({
  parrain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Joueur",
  },
  filleul: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Joueur",
  },
  confirmed: {
    type: Boolean,
  },
  date_parrainge: {
    type: Date,
    default: Date.now(),
  },
  date_expiration: {
    type: Date,
  },
});

const Parrainage = mongoose.model("parrainage", ParrainageSchema);

function validateParrainage(parrainage) {
  const schema = Joi.object({
    parrain: Joi.required(),
    parraine: Joi.required(),
    confirmed: Joi.boolean().required(),
    date_parrainge: Joi.date().required(),
    date_expiration: Joi.date().required(),
  });

  return schema.validate(parrainage);
}

exports.PARRAINAGE = Parrainage;
exports.validate = validateParrainage;
