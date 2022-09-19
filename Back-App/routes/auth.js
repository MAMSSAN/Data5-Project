const bcrypt = require("bcrypt");
const Joi = require("joi");
const _ = require("lodash");
const { Joueur } = require("../models/Joueur");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
var phoneToken = require("generate-sms-verification-code");

const Activation = process.env.JWT_PRIVATE_KEY;

router.post("/login", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let joueur = await Joueur.findOne({ email: req.body.email });
    if (!joueur) return res.status(400).send("Invalid email or password. ");

    const validPassword = await bcrypt.compare(
      req.body.password,
      joueur.password
    );
    if (!validPassword)
      return res.status(400).send("Invalid email or password");

    const token = jwt.sign(
      { _id: joueur._id, email: joueur.email, nom: joueur.nom },
      "jwtPrivateKey"
    );

    res.header("x-auth-token", token).send(token);

    console.log(res.getHeader("x-auth-token"));
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/signupToken", async (req, res) => {
  var accountSid = "AC376bdcc7b4cd22a32850fcef6ca82b81"; // Your Account SID from www.twilio.com/console
  var authToken = "e455645393ecdc5c169529e00a21d0c4"; // Your Auth Token from www.twilio.com/console

  var twilio = require("twilio");
  var client = new twilio(accountSid, authToken);
  var generatedToken = phoneToken(4, { type: "number" });

  client.messages
    .create({
      body: "your verification Data5Code is : " + generatedToken,
      to: req.body.tele, // Text this number
      from: "+16515040551", // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
  res.header("x-auth-token", generatedToken);
  res.send("message sent");
});

function validate(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(req);
}

module.exports = router;
