import React, { useState } from "react";
import Uncle from "../assets/images/but-like-y-tho.png";
import Game from "../assets/images/Fuck.png";
import white from "../assets/images/swag.png";
import Films from "../components/Films"

export default function Music() {
  const [List, setList] = useState([Uncle, Game,white]);
  return (
    <>
    <h2> Name That Film</h2>
      <div style={{padding: "1%"}}>
        {List.map((film, idx) => (
          <Films film={film} index={idx + 11} />
        ))}
      </div>
      <div>
        <a href="/music"> Previous </a> 
      </div>
    </>
  );
}
