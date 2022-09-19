const mongoose = require("mongoose");
const Joi = require("joi");

const statSchema = new mongoose.Schema({
  tempsJeu: {
    type: String,
  },
  distanceParcourue: {
    type: String,
  },
  numeroBadge: {
    type: Number,
  },
  vitesseMax: {
    type: String,
  },
  changementAppui: {
    type: Number,
  },
  VMA: {
    type: Number,
  },
  jeuParMinute: [],

  calories: {
    type: Number,
  },
  puissanceMaxTir: {
    type: String,
  },
  acceleration: {
    type: Number,
  },
  accelDeltaVitesseMax2s: {
    type: String,
  },
  nombreTir: {
    type: Number,
  },
  nombrePas: {
    type: Number,
  },
  equipe: {
    type: String,
  },
  calorie: {
    type: String,
  },
  note_datafive: {
    type: Number,
  },
  niveauBatterie: {
    type: String,
  },
  arret_goal: {
    type: Number,
  },
  possession: {
    type: Number,
  },
});

const Stats = mongoose.model("Stats", statSchema);

exports.Stats = Stats;
