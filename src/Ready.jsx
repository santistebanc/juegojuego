import React, { useState, useEffect } from "react";
import "./Ready.css";
import gun from "./gun";

function Ready({ room, name, players }) {
  console.log("players: ", players);
  return (
    <div className="Ready">
      <h1>{name}</h1>
      <button
        onClick={() => {
          const points = gun.get(room).get("players").get(name).get("points");
          points.once((current) => points.put((current ?? 0) + 10));
        }}
      />
      <table>
        <tr>
          <th>Jugador</th>
          <th>Puntos</th>
        </tr>
        {players.map((player) => (
          <tr key={player.name}>
            <td>{player.name}</td>
            <td>{player.points}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Ready;
