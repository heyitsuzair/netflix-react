import React from "react";
import { Link } from "react-router-dom";

export default function Upcoming({ coming }) {
  return (
    <>
      <h2 className="coming-soon-h2">Coming Soon</h2>
      <div className="coming-soon">
        <div className="coming-soon-inner">
          {coming.map((movie) => {
            return (
              <div className="coming-soon-item" key={movie.id}>
                <Link
                  to={`/movie/${
                    movie.genre_ids !== undefined ? movie.genre_ids[0] : ""
                  }/${movie.id}`}
                >
                  {movie.original_title}
                </Link>
                <p>{movie.overview.slice(0, 150)}...</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
