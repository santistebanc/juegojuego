import "./App.css";
import gun from "./gun";
import React, { useState, useEffect } from "react";
import Register from "./Register";
import Ready from "./Ready";

function App() {
  const [teamName, setTeamName] = useState("");
  const [players, setPlayers] = useState({});

  useEffect(() => {
    setTeamName(window.location.hash.slice(1));
    window.onhashchange = () => {
      setTeamName(window.location.hash.slice(1));
    };
    gun
      .get("players")
      .map()
      .on((player) => {
        console.log("...player", player);
        setPlayers((players) => ({ ...players, [player.name]: player }));
      });
  }, []);

  useEffect(() => {
    gun.get("players").get(teamName).put({ name: teamName });
  }, [teamName]);

  if (teamName) {
    return <Ready teamName={teamName} players={Object.values(players)} />;
  } else {
    return <Register teamName={teamName} setTeamName={setTeamName} />;
  }
}

export default App;
