const mongoose = require("mongoose");
const Joi = require("joi");

const CentreSchema = new mongoose.Schema({
  nom: {
    type: String,
  },

  adresse: {
    street: {
      type: String,
    },
    ville: {
      type: String,
    },

    codePostale: {
      type: Number,
    },
  },
  telephone: {
    type: Number,
  },
  email: {
    type: String,
  },
  gerant: {
    type: String,
  },
  deleted: {
    type: Boolean,
  },
});

const Centre = mongoose.model("Centre", CentreSchema);

function validateCentre(centre) {
  const schema = Joi.object({
    nom: Joi.string().required(),
    adresse: Joi.object()
      .keys({
        street: Joi.string().required(),
        ville: Joi.string().required(),
        codePostale: Joi.number().required(),
      })
      .required(),

    telephone: Joi.number().required(),
    email: Joi.string().required().email(),
    gerant: Joi.string().required(),
  });

  return schema.validate(centre);
}

exports.Centre = Centre;
exports.validate = validateCentre;
