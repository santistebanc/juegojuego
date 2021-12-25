import React, { useState, useEffect } from "react";
import "./Admin.css";
import gun from "./gun";
import questions from "./questions.json";

function Admin({ players, question }) {
  const [inputQuestion, setInputQuestion] = useState(question);

  console.log("players: ", players);
  return (
    <div className="Admin">
      <h1>Admin</h1>
      <label>
        Pregunta:
        <input
          type="number"
          onChange={(e) => {
            setInputQuestion(+e.target.value);
          }}
          className="selectQuestion"
          value={inputQuestion}
        />
      </label>
      <div style={{ display: "flex", margin: "20px" }}>
        <button
          className="reset"
          onClick={() => {
            gun.get("game").put({
              question: inputQuestion,
              time: 0,
              playing: false,
              first: null,
            });
          }}
        >
          Reset
        </button>
        <button
          className="play"
          onClick={() => {
            gun.get("game").put({ question: inputQuestion, playing: true });
          }}
        >
          Play
        </button>
        <button
          className="pause"
          onClick={() => {
            gun.get("game").put({ playing: false });
          }}
        >
          Pause
        </button>
        <button
          className="reveal"
          onClick={() => {
            gun.get("game").put({ time: 0.999, playing: false });
          }}
        >
          Reveal
        </button>
      </div>
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
              <td>
                <input
                  type="number"
                  onChange={(e) => {
                    gun
                      .get("players")
                      .get(player.name)
                      .put({ points: e.target.value });
                  }}
                  className="points"
                  value={player.points}
                />
              </td>
              <td>
                <button
                  className="correct"
                  onClick={() => {
                    gun
                      .get("players")
                      .get(player.name)
                      .put({
                        points: Number(players[player.name].points) + 100,
                      });
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="correct"
                  onClick={() => {
                    gun
                      .get("players")
                      .get(player.name)
                      .put({
                        points: Number(players[player.name].points) - 100,
                      });
                  }}
                >
                  -
                </button>
              </td>
              <td>
                <button
                  className="remove"
                  onClick={() => {
                    gun.get("players").get(player.name).put({ deleted: true });
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
