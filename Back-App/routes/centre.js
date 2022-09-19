const express = require("express");
const router = express.Router();
const CentreController = require("../Controllers/CentreRestController");
const auth = require("../middleware/auth");

router.post("/ajouterCentre", async (req, res) => {
  CentreController.ajouterCentre(req, res);
});

router.get("/afficherCentres", async (res) => {
  CentreController.afficherCentre(res);
});

router.get("/afficherCentre/:id", async (req, res) => {
  CentreController.afficherCentre(req, res);
});

router.put("/ModifierCentre/:id", async (req, res) => {
  CentreController.modifierCentre(req, res);
});

router.put("/deleteCentre/:id", async (req, res) => {
  CentreController.supprimerCentre(req, res);
});

router.post("/ajouterTerrain/:id", async (req, res) => {
  console.log("test here");
  CentreController.ajouterTerrain(req, res);
});

router.post("/reserverTerrain/:id", auth, async (req, res) => {
  CentreController.ReserverTerrain(req, res);
});

module.exports = router;
