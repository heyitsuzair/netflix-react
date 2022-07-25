import React from "react";

export default function Tagline({ movie }) {
  return (
    <div className="tagline">
      <span>{movie.status}</span>
      <span className="tagline-inner">{movie.tagline}</span>
    </div>
  );
}
