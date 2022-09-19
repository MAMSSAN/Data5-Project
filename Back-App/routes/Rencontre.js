const express = require("express");
const router = express.Router();
const rencontreController = require("../Controllers/RencontreRestController");
const auth = require("../middleware/auth");

router.post("/ajouterMatch", auth, async (req, res) => {
  rencontreController.ajouterMatch(req, res);
});

router.post("/creerSession/:id", auth, async (req, res) => {
  rencontreController.creerSessionMatch(req, res);
});

router.get("/getLastMatch", auth, async (req, res) => {
  rencontreController.getDernierMatch(req, res);
});

router.post("/creerSession", async (req, res) => {
  rencontreController.creerSession(req, res);
});

router.put("/AjouterJoueurs/:id", auth, async (req, res) => {
  rencontreController.affecterJoueurRencontre(req, res);
});

module.exports = router;
