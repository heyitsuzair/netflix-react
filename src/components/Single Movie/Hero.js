import React from "react";
import logo2 from "./img/favicon.ico";
export default function Hero({ movie }) {
  return (
    <div
      className="movie-hero"
      style={{
        background: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
      }}
    >
      <div className="movie-overlay">
        <div className="movie-hero-inner">
          <div className="series">
            <img src={logo2} width={30} alt="" />
            <span>Series</span>
          </div>
          <div className="title">{movie.original_title}</div>
          <div className="movie-info">
            {new Date(movie.release_date).getFullYear()} |
            {movie.adult ? " Adult" : " Youngish"} | {movie.status} |
            <a href={`${movie.homepage}`}>
              {movie.production_companies !== undefined
                ? "\n" + movie.production_companies[0].name
                : ""}
            </a>
          </div>
          <div className="overview">{movie.overview}</div>
          <div className="creators">
            <span className="creators-span">Languages</span> :
            <span>
              {movie.spoken_languages !== undefined
                ? movie.spoken_languages.map((language) => {
                    return "\n" + language.name + "\n";
                  })
                : "Loading"}
            </span>
          </div>
          <div className="creators">
            <span className="creators-span">Countries</span> :
            <span>
              {movie.production_countries !== undefined
                ? movie.production_countries.map((country) => {
                    return "\n" + country.name + "\n";
                  })
                : "Loading"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
