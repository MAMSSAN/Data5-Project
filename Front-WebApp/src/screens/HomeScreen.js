import React from "react";
import logo from "../assets/logo.png";
import { useHistory } from "react-router";
import "../App.css";

export default function HomeScreen() {
  const history = useHistory();
  return (
    <div className="App">
      <img src={logo} alt="logo" className="Logo" />
      <div>
       
        <button className="ButtonA" onClick={() => history.push("/invite")}>
          Invité{" "}
        </button>
        <button className="ButtonB" onClick={() => history.push("/invite")}>
          Abonné{" "}
        </button>
      </div>
    </div>
  );
}
