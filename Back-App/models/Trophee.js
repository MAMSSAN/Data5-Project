const mongoose = require("mongoose");
const Joi = require("joi");

const TropheeSchema = mongoose.Schema({
  nom: {
    type: String,
  },
  recompense: {
    type: String,
  },
  date: {
    type: Date,
  },
  type: {
    type: String,
  },
});

const Trophee = mongoose.model("Trophee", TropheeSchema);

exports.Trophee = Trophee;
