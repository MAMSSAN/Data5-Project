const mongoose = require("mongoose");

const Joi = require("joi");

const TerrainSchema = new mongoose.Schema({
  nom: {
    type: String,
  },
  superficie: {
    type: Number,
  },
  centre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Centre",
  },
});

const Terrain = mongoose.model("Terrain", TerrainSchema);

exports.Terrain = Terrain;
