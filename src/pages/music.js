import React, { useState } from "react";
import Rockstar from "../assets/music/Cheater.mp3";
import Numb from "../assets/music/Nope.mp3";
import Feeling from "../assets/music/nicetry.mp3";
import Take from "../assets/music/nooope.mp3";
import Lion from "../assets/music/hahaha.mp3";
import Question from "../components/question";

export default function Music() {
  const [List, setList] = useState([Rockstar, Numb, Feeling, Take, Lion]);
  return (
    <>
        <h2> Name that Song</h2>
      <div>
        {List.map((track, idx) => (
          <Question track={track} index={idx + 6} />
        ))}
      </div>
      <div>
        <a href="/film"> Next </a>
      </div>
    </>
  );
}
