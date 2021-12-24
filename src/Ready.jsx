import React, { useState, useEffect } from "react";
import "./Ready.css";
import gun from "./gun";

function Ready({ teamName, players }) {
  console.log("players: ", players);
  return (
    <div className="Ready">
      <h1>{teamName}</h1>
      <button
        onClick={() => {
          const points = gun.get("players").get(teamName).get("points");
          points.once((current) => points.put((current ?? 0) + 10));
        }}
      >
        STOP
      </button>
      <table>
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.name}>
              <td>{player.name}</td>
              <td>{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Ready;
