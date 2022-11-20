import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="details">
        <ul>
          <h1 id="title">Stranger Things</h1>
          <p id="desc">
            When a young boy vanishes, a small town uncovers a mystery involving
            secret experiments, terrifying supernatural forces and one strange
            little girl. Watch all you want. This nostalgic nod to '80s sci-fi
            and horror classics has earned dozens of Emmy nominations, including
            three for Outstanding Drama.
          </p>
        </ul>
        <ul id="buttons">
          <li id="playButton">
            <div className="triangle right"></div>
            Play
          </li>
          <li>more info</li>
        </ul>
      </div>
    </div>
  );
}
