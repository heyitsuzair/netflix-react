import React from "react";

export default function MoreDetails({ movie }) {
  return (
    <>
      <h2 className="more-details-h2">More Details</h2>
      <div className="more-detail-section">
        <div className="more-details">
          <span className="more-details-item">
            Production Companies
            <span className="detail-item">
              {movie.production_countries !== undefined
                ? movie.production_countries.map((country) => {
                    return "\n" + country.name + "\n";
                  })
                : "Loading"}
            </span>
          </span>
          <span className="more-details-item">
            Votes
            <span className="detail-item">{movie.vote_count}</span>
          </span>
        </div>
        <div className="more-details">
          <span className="more-details-item">
            Genres
            <span className="detail-item">
              {movie.genres !== undefined
                ? movie.genres.map((genre) => {
                    return "\n" + genre.name + "\n";
                  })
                : "Loading"}
            </span>
          </span>
          <span className="more-details-item">
            Popularity
            <span className="detail-item">{movie.popularity}%</span>
          </span>
        </div>
        <div className="more-details">
          <span className="more-details-item">
            This Movie Is
            <span className="detail-item">
              {movie.adult ? " Adult" : " Youngish"}
            </span>
          </span>
          <span className="more-details-item">
            Votes Average
            <span className="detail-item">{movie.vote_average}%</span>
          </span>
        </div>
      </div>
    </>
  );
}
