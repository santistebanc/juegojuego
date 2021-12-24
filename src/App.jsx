import "./App.css";
import gun from "./gun";
import React, { useState, useEffect } from "react";
import Register from "./Register";
import Ready from "./Ready";

const roomName = window.location.pathname.split("/")[1];
const teamName = window.location.pathname.split("/")[2];
console.log("room: ", roomName);
console.log("team: ", teamName);

const gunroom = gun.get(roomName);
const gunteam = gunroom.get("players").get(teamName).put({ name: teamName });

function App() {
  const [players, setPlayers] = useState({});

  useEffect(() => {
    gunroom
      .get("players")
      .map()
      .on((player) => {
        console.log("...player", player);
        setPlayers((players) => ({ ...players, [player.name]: player }));
      });
  }, []);

  if (teamName) {
    return (
      <Ready room={roomName} name={teamName} players={Object.values(players)} />
    );
  } else {
    return <Register />;
  }
}

export default App;
