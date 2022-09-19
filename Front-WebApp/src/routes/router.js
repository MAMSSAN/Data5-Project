import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AbonneScreen from "../screens/AbonneScreen";
import FormMatchScreen from "../screens/FormMatchScreen";
import HomeScreen from "../screens/HomeScreen";
import InviteScreen from "../screens/InviteScreen";
import matchScreen from "../screens/MatchScreen";

export default function router() {
  return (
    <Router>
      <Route exact path="/home" component={HomeScreen} />
      <Route exact path="/invite" component={InviteScreen} />
      <Route exact path="/abonne" component={AbonneScreen} />
      <Route exact path="/" component={matchScreen} />
      <Route exact path="/formulaireMatchAbonne" component={FormMatchScreen} />
    </Router>
  );
}
