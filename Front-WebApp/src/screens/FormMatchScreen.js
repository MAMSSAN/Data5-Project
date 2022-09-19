import React from "react";
import logo from "../assets/logo.png";

function FormMatchScreen() {
  return (
    <div
      style={{
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <img src={logo} alt="logo" className="LogoA" />
      <form>
        <div style={{ flexDirection: "column" }}>
          <label>
            Nom :
            <input type="text" name="name" />
          </label>
          <label>
            Nom :
            <input type="text" name="name" />
          </label>
          <label>
            Nom :
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
}

export default FormMatchScreen;
