const { User, validate } = require("../models/Joueur");
const _ = require("lodash");
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const joueurController = require("../Controllers/JoueurRestController");

router.get("/me", auth, async (req, res) => {
  joueurController.joueurConnecte(req, res);
});

router.post("/register", async (req, res) => {
  joueurController.inscriptionJoueur(req, res);
});

router.put("/updatePlayer/:id", async (req, res) => {
  joueurController.modifierJoueur(req, res);
});

router.get("/afficherJoueur/:id", async (req, res) => {
  console.log("test here 12");
  joueurController.afficherJoueur(req, res);
  console.log("test here");
});

router.get("/afficherJoueurs", async (res) => {
  joueurController.afficherJoueurs(res);
});

router.put("/deleteJoueur/:id", async (req, res) => {
  joueurController.supprimerJoueur(req, res);
});

router.get("/afficherData5Xp", auth, async (req, res) => {
  joueurController.affihcherXp(req, res);
});

module.exports = router;
