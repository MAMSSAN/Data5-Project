const Joi = require("joi");
const mongoose = require("mongoose");

const RencontreSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  score_A: {
    type: Number,
  },
  score_B: {
    type: Number,
  },
  joueurs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
  centre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Centre",
  },
});

const Rencontre = mongoose.model("Rencontre", RencontreSchema);

function validateMatch(Rencontre) {
  const schema = Joi.object({
    date: Joi.date().required(),
    heure_d: Joi.string().required(),
    heure_f: Joi.string().required(),
    score_A: Joi.number().required(),
    score_B: Joi.number().required(),
  });

  return schema.validate(user);
}

exports.Rencontre = Rencontre;
exports.validate = validateMatch;
