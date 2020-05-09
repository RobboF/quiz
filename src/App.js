import React, { useState } from "react";
import Rockstar from "./assets/music/Cheater.mp3";
import Numb from "./assets/music/Nope.mp3";
import Feeling from "./assets/music/nicetry.mp3";
import Take from "./assets/music/nooope.mp3";
import Lion from "./assets/music/hahaha.mp3";
import Uncle from "./assets/images/but-like-y-tho.png";
import Game from "./assets/images/Fuck.png";
import White from "./assets/images/swag.png";
import Club from "./assets/images/fuckup.png";
import Girl from "./assets/images/y33t.png";
import a from "./assets/images/a.jpg";
import b from "./assets/images/b.jpg";
import c from "./assets/images/c.jpg";
import d from "./assets/images/d.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Question from "./components/question";
export default function App() {
  const [List, setList] = useState([
    {
      type: "music",
      value: Rockstar,
    },
    {
      type: "music",
      value: Numb,
    },
    {
      type: "music",
      value: Feeling,
    },
    {
      type: "music",
      value: Take,
    },
    {
      type: "music",
      value: Lion,
    },
    {
      type: "image",
      value: Uncle,
    },
    {
      type: "image",
      value: Game,
    },
    {
      type: "image",
      value: White,
    },
    {
      type: "image",
      value: Club,
    },
    {
      type: "image",
      value: Girl,
    },
    {
      type: "bad",
      value:
        "Man is forced to participate in the rescue of a hostage by the government, that has turned his residence into a refugee camp",
    },
    {
      type: "bad",
      value:
        "An overweight loner with poor hygiene and social skills goes on a quest to get rid of the minorities invading his homeland.",
    },
    {
      type: "bad",
      value:
        "Little guy works overtime while also stealing body parts from his dead coworkers before ditching his job to go on a cruise with his unconscious girlfriend",
    },
    {
      type: "bad",
      value:
        "A young mother dies of AIDS after encouraging a friend's running career",
    },
    {
      type: "sean",
      value: a,
    },
    {
      type: "sean",
      value: b,
    },
    {
      type: "sean",
      value: c,
    },    
    {
      type: "sean",
      value: d,
    },
  ]);
  const [int, setInt] = useState(0);
  const RenderTitle = () => {
    console.log(List[int].type)
    switch (List[int].type) {
      case "music":
        return (
          <h2 class=" f2 fw2 i calisto  lh-title mt0 mb3">Name the track</h2>
        );
      case "image":
        return (
          <h2 class=" f2 fw2 i calisto  lh-title mt0 mb3">Name the still</h2>
        );
      case "bad":
        return (
          <h2 class=" f2 fw2 i calisto  lh-title mt0 mb3">Movie explained badly</h2>
        );
        case "sean":
          return (
            <h2 class=" f2 fw2 i calisto  lh-title mt0 mb3">Name the still: Bonus Connery edition</h2>
          );
      default: 
      return <h2 class=" f2 fw2 i calisto  lh-title mt0 mb3">Rob broke Something</h2>
    }
  };
  return (
    <>
      <div class="vh-100 dt w-100 tc bg-dark-gray white cover">
        <div class="dtc v-mid">
          <header class="white-70">
            <h1 class="f6 f2-m f-subheadline-l fw2 tc avenir">Quiz Time!</h1>
          </header>
            <RenderTitle />

          <Question q={List[int]} i={int} />
          <div class="ph0 mh0 measure f4 lh-copy center">
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={() => (int > 0 ? setInt(int - 1) : null)}
              size="3x"
            />
            <span className="ph4" />
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={() => (int < List.length - 1 ? setInt(int + 1) : null)}
              size="3x"
            />
          </div>
        </div>
      </div>
    </>
  );
}
