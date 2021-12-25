import React, { useState, useEffect } from "react";
import "./Ready.css";
import gun from "./gun";
import { Howl } from "howler";

const sound = new Howl({
  src: ["Pausa.mp3"],
});

function Ready({ teamName, player, players, first }) {
  if (!players[teamName]) return <h1>Loading...</h1>;

  const { points } = players[teamName];

  const isFirst = first === teamName;

  return (
    <div
      className="Ready"
      style={{
        backgroundColor: first ? (isFirst ? "green" : "red") : "#282c34",
      }}
    >
      <h3>{teamName}</h3>
      {first ? (
        <h1>{isFirst ? "Tú respondes" : first + " responde"}</h1>
      ) : (
        <button
          onClick={() => {
            gun.get("game").put({ first: teamName, playing: false });
            sound.play();
          }}
        >
          STOP
        </button>
      )}
      <h2>{points}</h2>
    </div>
  );
}

export default Ready;
