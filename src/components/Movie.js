import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/img/logo-2.png";
import logo2 from "../assets/img/favicon.ico";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Movie({ setProgress }) {
  const [movie, setMovie] = useState([]);
  let { id } = useParams();
  setProgress(20);
  const movieDetail = async (idIncome) => {
    let url = `https://api.themoviedb.org/3/movie/${idIncome}?api_key=d33fd7ceb022bfce03f26f165fccb251&language=en-US `;
    setProgress(70);
    await axios.get(url).then((res) => {
      setProgress(90);
      setMovie(res.data);
      setProgress(100);
      console.log(res);
    });
  };

  useEffect(() => {
    movieDetail(id);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="movie">
        <div className="movie-inner">
          <div className="navbar">
            <div className="navbar-2">
              <div className="nav-logo">
                <img src={logo} alt="Netflix" id="logo1" width={100} />
                <img src={logo2} alt="Netflix" id="logo2" width={30} />
              </div>
              <div className="nav-right">
                <p>Unlimited TV Shows & Movies</p>
                <a href="/" id="join-now">
                  Join Now
                </a>
                <a href="/" id="sign-in-only">
                  Sign In
                </a>
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </div>
  );
}
