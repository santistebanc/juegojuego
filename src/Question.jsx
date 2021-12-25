import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import "./Question.css";
import gun from "./gun";
import questions from "./questions.json";

function Question({ players, question }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const { title, src } = questions[question];

  useEffect(() => {
    gun
      .get("game")
      .get("playing")
      .on((isPlaying) => {
        setPlaying(isPlaying);
      });
    gun
      .get("game")
      .get("time")
      .on((time) => {
        if (ref.current && time != null) {
          ref?.current?.seekTo?.(time);
          gun.get("game").put({ time: null });
        }
      });
  }, [ref]);

  return (
    <div className="Question">
      <h1>{title}</h1>
      <ReactPlayer
        ref={ref}
        url={"https://drive.google.com/uc?export=view&id=" + src}
        volume={0}
        playing={playing}
      />
    </div>
  );
}

export default Question;
