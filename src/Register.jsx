import React, { useState, useEffect } from "react";
import "./Register.css";
import gun from "./gun";

function Register({ teamName, setTeamName }) {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.hash = name;
      }}
    >
      <div className="Register">
        <h1>Nombre del jugador o equipo</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        <input type="submit" value="Listo!" />
      </div>
    </form>
  );
}

export default Register;
