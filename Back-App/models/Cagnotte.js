const mongoose = require("mongoose");
const Joi = require("joi");

const CagnotteSchema = new mongoose.Schema({
  Joueur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Joueur",
  },
  dataXp: {
    type: Number,
  },
  dataCoin: {
    type: Number,
  },
  niveau: {
    type: Number,
  },
  titre_nv: {
    type: String,
  },
});

const Cagnotte = mongoose.model("Cagnotte", CagnotteSchema);

function validateCagnotte(cagnotte) {
  const schema = Joi.object({
    Joueur: Joi.required(),
    dataXp: Joi.number().required(),
    dataCoin: Joi.number().required(),
    niveau: Joi.number().required(),
    titre_nv: Joi.String().required(),
  });

  return schema.validate(cagnotte);
}

exports.CAGNOTTE = Cagnotte;
exports.validate = validateCagnotte;
