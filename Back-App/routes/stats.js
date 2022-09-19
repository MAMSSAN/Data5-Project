const express = require("express");
const router = express.Router();
const statsController = require("../Controllers/StatsRestController");
const auth = require("../middleware/auth");

router.get("/getStats", auth, async (res) => {
  statsController.decompresserStatsFile(res);
});

router.get("/getStatsFiles", async (req, res) => {
  statsController.savingData(req, res);
});

router.get("/getInfos", async (req, res) => {
  statsController.decompresserInfoFile(req, res);
});

router.get("/getInfosFiles", async (req, res) => {
  statsController.savingInfoData(req, res);
});

router.get("/getStatsPlayerdernierMatch", auth, async (req, res) => {
  statsController.afficherStatsJoueurdernierMatch(req, res);
});

router.get("/getStatsPlayerMatchs", auth, async (req, res) => {
  statsController.afficherStatsJoueurMatchs(req, res);
});

router.get("/getsAllStatsOfPlayer", auth, async (req, res) => {
  statsController.afficherTotalStats(req, res);
});

router.get("/getMaxMinMoystats", auth, async (req, res) => {
  statsController.getMaxMinMoyStats(req, res);
});

module.exports = router;
