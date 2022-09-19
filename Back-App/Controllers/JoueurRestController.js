const { Joueur, validate } = require("../models/Joueur");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  joueurConnecte: async (req, res) => {
    try {
      console.log(req);
      const joueur = await Joueur.findById(req.joueur._id).select("-password");
      res.send(joueur);
    } catch (err) {
      console.log(err.message);
    }
  },

  inscriptionJoueur: async (req, res) => {
    try {
      const { error } = validate(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      let joueur = await Joueur.findOne({ email: req.body.email });
      if (joueur) return res.status(400).send("Player already registred.");

      joueur = new Joueur(
        _.pick(req.body, [
          "nom",
          "email",
          "password",
          "email",
          "gender",
          "date_naissance",
          "weight",
          "height",
        ])
      );
      const salt = await bcrypt.genSalt(10);
      joueur.password = await bcrypt.hash(joueur.password, salt);
      joueur.deleted = false;
      await joueur.save();

      const token = jwt.sign({ _id: joueur._id }, "jwtPrivateKey");

      res
        .header("x-auth-token", token)
        .send(_.pick(joueur, ["_id", "nom", "email"]));
    } catch (err) {
      console.log(err.message);
    }
  },

  modifierJoueur: async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let joueur = await Joueur.findById(req.params.id);

    if (!joueur) return res.status(400).send("id si not available");

    joueur = new Joueur(_.pick(req.body, ["name", "email", "password"]));
    const salt = await bcrypt.genSalt(10);
    joueur.password = await bcrypt.hash(joueur.password, salt);
    await joueur.save();

    const token = jwt.sign({ _id: joueur._id }, "jwtPrivateKey");
    res.header("x-auth-token", token).send(joueur);
  },

  afficherJoueur: async (req, res) => {
    console.log("test here 22");
    const joueur = await Joueur.findById(req.params.id);
    //console.log(joueur);
    if (!joueur && joueur.deleted)
      res.status(400).send("utilisateur introuvable");
    console.log(joueur);
    res.send(joueur);
  },

  afficherJoueurs: async (req, res) => {
    let joueurs = await Joueur.find();
    res.send(joueurs);
  },

  supprimerJoueur: async (req, res) => {
    let joueur = await Joueur.findById(req.params.id);
    if (!joueur && joueur.deleted)
      res.status(400).send("utilisateur introuvable");
    joueur.deleted = true;
    await joueur.save();
    res.status(200).send("user deleted succefully");
  },
};
