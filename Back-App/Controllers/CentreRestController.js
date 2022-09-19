const express = require("express");
const _ = require("lodash");
const { Centre, validate } = require("../models/Centre");
const { Terrain } = require("../models/Terrain");
const { Joueur } = require("../models/Joueur");
const { Reservation } = require("../models/Reservation");

module.exports = {
  ajouterCentre: async (req, res) => {
    try {
      console.log(req.body);
      const { error } = validate(req.body);
      if (error) return res.status(400).send(error.details[0].message);
      centre = new Centre(
        _.pick(req.body, [
          "nom",
          "adresse.street",
          "adresse.ville",
          "adresse.codePostale",
          "telephone",
          "email",
          "gerant",
        ])
      );
      centre.set({
        deleted: false,
      });

      await centre.save();
      res.status(200).send("center added succefully");
    } catch (err) {
      console.log(err.message);
    }
  },

  afficherCentres: async (res) => {
    const centres = await Centre.find();
    res.send(centres);
  },

  afficherCentre: async (req, res) => {
    let centre = await Centre.findById(req.params.id);
    if (!centre && centre.deleted)
      return res.status(400).send("centre indisponible");
    res.send(centre);
  },

  modifierCentre: async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let centre = await Centre.findById(req.params.id);

    if (!centre) return res.status(400).send("centre indisponible");
    centre.set({
      nom: req.body.nom,
    });

    console.log(req.body);
    await centre.save();
    res.status(200).send("center updated succefully");
  },

  supprimerCentre: async (req, res) => {
    try {
      let centre = await Centre.findById(req.params.id);
      if (!centre && centre.deleted)
        return res.status(400).send("centre introuvable");
      centre.set({
        deleted: true,
      });

      await centre.save();
      res.status(200).send("center deleted succefully");
    } catch (err) {
      console.log(err.message);
    }
  },

  ajouterTerrainCentre: async (req, res) => {
    try {
      console.log(req.body);
      terrain = new Terrain(_.pick(req.body, ["nom", "superficie"]));
      //let centre = Centre.findById(req.params.id);
      //terrain.centre_id = centre._id;
      await terrain.save();
      res.status(200).send("terrain added succefully");
    } catch (err) {
      console.log(err.message);
    }
  },

  ajouterTerrain: async (req, res) => {
    terrain = new Terrain(_.pick(req.body, ["nom", "superficie"]));
    centre = await Centre.findById(req.params.id);
    console.log(centre._id);
    terrain.centre_id = centre._id;
    await terrain.save();
    res.status(200).send("terrain added succefully");
  },

  ReserverTerrain: async (req, res) => {
    try {
      const joueur = await Joueur.findById(req.joueur._id).select("-password");
      const id_joueur = joueur._id;
      const terrain = await Terrain.findById(req.params.id);
      console.log(terrain);

      let reservation = new Reservation();
      reservation.id_joueur = id_joueur;
      reservation.id_terrain = terrain._id;
      reservation.id_centre = terrain.centre_id;
      console.log(terrain.centre_id);

      // await reservation.map(() => {
      //   if (r.date == reservation.date) {
      //     console.log("teste here");
      //     res.status(401).send("Terrain is already taken");
      //   }
      // }),
      await reservation.save();
      res.status(200).send("Terrain reserved succefully");
    } catch (err) {
      console.log(err.message);
    }
  },
};
