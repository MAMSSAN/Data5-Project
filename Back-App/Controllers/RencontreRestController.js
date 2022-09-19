const { validate, Rencontre } = require("../models/Rencontre");
const { Joueur } = require("../models/Joueur");
const _ = require("lodash");
const { Session } = require("../models/Session");

module.exports = {
  creerSessionMatch: async (req, res) => {
    const session = new Session(
      _.pick(req.body, ["emailJoueur", "idBoitier", "equipe"])
    );
    session.rencontre = req.params.id;
    await session.save();
    res.status(200).send("enregistrement reussis");
  },

  getDernierMatch: async (req, res) => {
    const joueur = await Joueur.findById(req.joueur._id).select("-password");
    const test = joueur.email;
    console.log(test);
    const session = await Session.find({
      emailJoueur: test,
    });

    const rencontre = await Rencontre.find({}).populate("joueurs");
    console.log(rencontre);
    res.status(200).send(rencontre);
  },

  creerRencontre: async (req, res) => {
    rencontre = new Rencontre(_.pick(req.body, ["centre"]));
    console.log();
    await rencontre.save();
    res.status(200).send("Session createed successfuly");
  },

  affecterJoueurRencontre: async (req, res) => {
    console.log(req.params.id);
    const rencontre = await Rencontre.findById(req.params.id);
    console.log(rencontre);
    console.log(req.joueur);
    //rencontre.joueurs.push(req.joueurs);

    //await rencontre.save();
    res.status(200).send("Match modified successfuly");
  },
};
