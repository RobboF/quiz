import React from "react";
import ReactAudioPlayer from "react-audio-player";
export default function Question(props) {
  return (
    <div style={{textAlign: "center"}}>
        <h3 style={{textAlign: "left", marginLeft: "30%"}}>Question {props.index}</h3>
      <ReactAudioPlayer style={{width: "50%", display: "inline-block"}} src={props.track} controls />
    </div>
  );
}
