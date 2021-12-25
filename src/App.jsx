import "./App.css";
import gun from "./gun";
import React, { useState, useEffect } from "react";
import Register from "./Register";
import Ready from "./Ready";
import Admin from "./Admin";
import Board from "./Board";

function App() {
  const [teamName, setTeamName] = useState("");
  const [players, setPlayers] = useState({});
  const [question, setQuestion] = useState(0);
  const [first, setFirst] = useState();
  const [showCorrect, setCorrect] = useState(false);
  const [showWrong, setWrong] = useState(false);

  useEffect(() => {
    gun
      .get("game")
      .get("first")
      .on((ans) => {
        console.log("????", ans);
        if (!first) {
          setFirst(ans);
        }
      });
  });

  useEffect(() => {
    gun
      .get("game")
      .get("question")
      .on((qNum) => {
        setQuestion(qNum);
      });
  }, []);

  useEffect(() => {
    setTeamName(window.location.hash.slice(1));
    window.onhashchange = () => {
      setTeamName(window.location.hash.slice(1));
    };
    gun
      .get("players")
      .map()
      .on((player) => {
        if (player.deleted) {
          setPlayers((players) => {
            const newPlayers = { ...players };
            delete newPlayers[player.name];
            return newPlayers;
          });
        } else if (player.name !== "admin" && teamName !== "board") {
          setPlayers((players) => ({
            ...players,
            [player.name]: player,
          }));
        }
      });
  }, []);

  useEffect(() => {
    if (teamName !== "admin" && teamName !== "board") {
      gun.get("players").get(teamName).put({ name: teamName, deleted: false });
    }
  }, [teamName]);

  if (teamName === "admin") {
    return (
      <Admin
        showCorrect={showCorrect}
        setCorrect={setCorrect}
        showWrong={showWrong}
        setWrong={setWrong}
        question={question}
        players={players}
        first={first}
      />
    );
  } else if (teamName === "board") {
    return (
      <Board
        showCorrect={showCorrect}
        setCorrect={setCorrect}
        showWrong={showWrong}
        setWrong={setWrong}
        question={question}
        players={players}
      />
    );
  } else if (teamName) {
    return <Ready teamName={teamName} players={players} first={first} />;
  } else {
    return <Register teamName={teamName} setTeamName={setTeamName} />;
  }
}

export default App;
