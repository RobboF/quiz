import React from "react";

export default function Films(props) {
  return (
    <div>
      <h3 style={{ textAlign: "left", marginLeft: "30%" }}>
        Question {props.index}
      </h3>

      <img style={{ width:"95vw", objectFit: "fill" }} src={props.film} />
    </div>
  );
}
