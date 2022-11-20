import React from "react";

export default function Movie({ name, image }) {
  return (
    <div className="movie">
      <ul>
        <li>
          <img src={image} alt="Mimage" />
        </li>
        <li>
          <p>{name}</p>
        </li>
      </ul>
    </div>
  );
}
