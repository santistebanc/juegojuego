import React, { useState, useEffect } from "react";
import "./Board.css";
import gun from "./gun";
import Question from "./Question";

const soundCorrect = new Howl({
  src: ["Correcto.mp3"],
});

const soundWrong = new Howl({
  src: ["Wrong.mp3"],
});

function Board({
  players,
  question,
  showCorrect,
  setCorrect,
  showWrong,
  setWrong,
}) {
  useEffect(() => {
    if (showCorrect) {
      soundCorrect.play();
      setCorrect(false);
    }
  }, [showCorrect]);

  useEffect(() => {
    if (showWrong) {
      soundWrong.play();
      setWrong(false);
    }
  }, [showWrong]);

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
