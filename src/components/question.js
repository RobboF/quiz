import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Question(props) {
  return (
    <>
      <h2 class="f6 fw1 ttu tracked mb1 lh-title">Question {props.i + 1}</h2>

      <article class=" dt w-100" style={{ height: "50vh" }}>
        <div class="dtc v-mid tc white ph3 ph4-l">{RenderContent(props.q)}</div>
      </article>
    </>
  );
}
const RenderAudio = (q) => (
  <ReactAudioPlayer
    style={{ width: "80%", display: "inline-block" }}
    src={q.value}
    controls
  />
);

const RenderImage = (q) => {
  return (
    <article class="w-90 w-90-ns center pt3">
      <div class="aspect-ratio aspect-ratio--16x9 mb4">
        <div
          class="aspect-ratio--object cover"
          style={{ background: `url(${q.value}) center` }}
        ></div>
      </div>
    </article>
  );
};

const RenderText = (q) => {
  return <h2 class=" f2 fw2 i calisto  lh-title mt0 mb3">"{q.value}"</h2>;
};

const RenderContent = (q) => {
  switch (q.type) {
    case "music":
      return RenderAudio(q);
    case "image":
      return RenderImage(q);
    case "sean":
      return RenderImage(q);
    case "bad":
      return RenderText(q);
    default:
      return <p> Error </p>;
  }
};
