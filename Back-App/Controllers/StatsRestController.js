const { Stats } = require("../models/stats");
const { Session } = require("../models/Session");
const _ = require("lodash");
const decompress = require("decompress");
const fs = require("fs");
const { Joueur } = require("../models/Joueur");

module.exports = {
  decompresserStatsFile: () => {
    try {
      decompress("test.zip", "dist");
      // fs.unlink("test.zip", function () {
      //   console.log("File  was deleted"); // Callback
      // });
    } catch (err) {
      console.log(err.message);
    }
  },

  savingData: async (req, res) => {
    try {
      const testFolder = "./dist/";
      const fs = require("fs");

      fs.readdirSync(testFolder).forEach(async (file) => {
        const filetest = fs.readFileSync(testFolder + file, "utf8");
        console.log(filetest);
        stats = new Stats(JSON.parse(filetest));
        await stats.save();
        console.log("test 1 ");
        fs.unlink(testFolder + file, function () {
          console.log("File  was deleted"); // Callback
        });
      });

      res.send("ok");
    } catch (err) {
      console.log(err.message);
    }
  },

  decompresserInfoFile: () => {
    try {
      decompress("infoTest.zip", "Info");
      // fs.unlink("infoTest.zip", function () {
      //   console.log("File  was deleted"); // Callback
      // });
    } catch (err) {
      console.log(err.message);
    }
  },

  savingInfoData: async (req, res) => {
    try {
      const testFolder = "./Info/";
      const fs = require("fs");

      fs.readdirSync(testFolder).forEach(async (file) => {
        const filetest = fs.readFileSync(testFolder + file, "utf8");
        //console.log(filetest);
        session = new Session(JSON.parse(filetest));
        await session.save();
        console.log("test here");
        // fs.unlink(testFolder + file, function () {
        //   console.log("File  was deleted"); // Callback
        // });
      });

      res.send("ok");
    } catch (err) {
      console.log(err.message);
    }
  },

  afficherStatsJoueurdernierMatch: async (req, res) => {
    const joueur = await Joueur.findById(req.joueur._id).select("-password");
    const session = await Session.findOne({ emailJoueur: joueur.email });
    console.log(session);
    console.log(joueur);
    const stats = await Stats.findOne({ numeroBadge: session.idBoitier });
    console.log(stats);
    res.send(stats);
  },

  afficherStatsJoueurMatchs: async (req, res) => {
    const joueur = await Joueur.findById(req.joueur._id).select("-password");
    const session = await Session.findOne({ emailJoueur: joueur.email });
    console.log(session);
    console.log(joueur);
    const stats = await Stats.find({ numeroBadge: session.idBoitier });
    console.log(stats);
    res.send(stats);
  },

  afficherTotalStats: async (req, res, callback) => {
    const joueur = await Joueur.findById(req.joueur._id).select("-password");
    const session = await Session.find({ emailJoueur: joueur.email });

    const dbQueryPromise = new Promise((resolve, reject) => {
      _resolve = resolve;
      _reject = reject;
    });
    await session.map(async (s) => {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      var distancesArray = [];
      var caloriesArray = [];
      var TirArray = [];
      var DribbleArray = [];
      var ButsArray = [];
      var AccArray = [];

      stat = await Stats.find({ numeroBadge: s.idBoitier });
      const globalArray = [];
      stats = globalArray.concat(stat);
      await stats.map(async (st) => {
        distancesArray.push(Number(st.distanceParcourue));
        caloriesArray.push(Number(st.calorie));
        TirArray.push(st.nombreTir);
        DribbleArray.push(st.changementAppui);
        //ButsArray.push(st.buts),
        AccArray.push(st.acceleration);
      });

      res.status(200).json({
        Tirs: TirArray.reduce(reducer),
        Calories: caloriesArray.reduce(reducer),
        Dribbles: DribbleArray.reduce(reducer),
        Distance: distancesArray.reduce(reducer),
        //Buts: ButsArray.reduce(reducer),
        accelerations: AccArray.reduce(reducer),
      });
    });
    return await dbQueryPromise;
  },

  getMaxMinMoyStats: async (req, res) => {
    const joueur = await Joueur.findById(req.joueur._id).select("-password");
    const session = await Session.find({ emailJoueur: joueur.email });
    console.log(session);
    const dbQueryPromise = new Promise((resolve, reject) => {
      _resolve = resolve;
      _reject = reject;
    });
    var Maxstats = [];
    var Minstats = [];
    var Moystats = [];
    await session.map(async (s) => {
      stat = await Stats.find({ numeroBadge: s.idBoitier });
      var distancesArray = [];
      var caloriesArray = [];
      var TirArray = [];
      var DribbleArray = [];
      var ButsArray = [];
      var AccArray = [];

      const globalArray = [];
      stats = globalArray.concat(stat);
      await stats.map(async (st) => {
        distancesArray.push(Number(st.distanceParcourue));
        caloriesArray.push(Number(st.calorie));
        TirArray.push(st.nombreTir);
        DribbleArray.push(st.changementAppui);
        //ButsArray.push(st.buts),
        AccArray.push(st.acceleration);
      });
      Maxstats.push({
        Tirs: Math.max(...TirArray),
        Calories: Math.max(...caloriesArray),
        Dribbles: Math.max(...DribbleArray),
        Distance: Math.max(...distancesArray),
        //Buts: ButsArray.reduce(reducer),
        accelerations: Math.max(...AccArray),
      });

      Minstats.push({
        Tirs: Math.min(...TirArray),
        Calories: Math.min(...caloriesArray),
        Dribbles: Math.min(...DribbleArray),
        Distance: Math.min(...distancesArray),
        //Buts: ButsArray.reduce(reducer),
        accelerations: Math.min(...AccArray),
      });

      Moystats.push({
        Tirs: Math.floor(
          TirArray.reduce(
            (accumulator, currentValue) =>
              (accumulator + currentValue) / TirArray.length
          )
        ),
        Calories: Math.floor(
          caloriesArray.reduce(
            (accumulator, currentValue) =>
              (accumulator + currentValue) / caloriesArray.length
          )
        ),
        Dribbles: Math.floor(
          DribbleArray.reduce(
            (accumulator, currentValue) =>
              (accumulator + currentValue) / DribbleArray.length
          )
        ),
        Distances: Math.floor(
          distancesArray.reduce(
            (accumulator, currentValue) =>
              (accumulator + currentValue) / distancesArray.length
          )
        ),
        Accelerations: Math.floor(
          AccArray.reduce(
            (accumulator, currentValue) =>
              (accumulator + currentValue) / AccArray.length
          )
        ),
      });

      res.status(200).json({ Max: Maxstats, Min: Minstats, Moy: Moystats });
    });
    return await dbQueryPromise;
  },
};
