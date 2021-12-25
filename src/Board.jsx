import React, { useState, useEffect } from "react";
import "./Board.css";
import gun from "./gun";
import Question from "./Question";

function Board({ players, question }) {
  if (question > 0) {
    return <Question question={question} players={players} />;
  }

  return (
    <div className="Board">
      <h1>Navidad 2021</h1>
      <table>
        <thead>
          <tr>
            <th>Jugador</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(players).map((player) => (
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

export default Board;
