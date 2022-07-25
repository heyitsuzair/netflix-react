import React from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/img/logo-2.png";
import logo2 from "../assets/img/favicon.ico";
import axios from "axios";
import { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Movie({ setProgress }) {
  const [movie, setMovie] = useState([]);
  const [videos, setVideos] = useState([]);
  let { id } = useParams();
  const options = {
    margin: 5,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["<", ">"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  setProgress(30);
  const movieDetail = async (idIncome) => {
    let url = `https://api.themoviedb.org/3/movie/${idIncome}?api_key=d33fd7ceb022bfce03f26f165fccb251&language=en-US `;
    setProgress(60);
    await axios.get(url).then((res) => {
      setProgress(90);
      setMovie(res.data);
    });
  };
  const getVideos = async (idIncome) => {
    let url = `https://api.themoviedb.org/3/movie/${idIncome}/videos?api_key=d33fd7ceb022bfce03f26f165fccb251&language=en-US `;

    await axios.get(url).then((res) => {
      setVideos(res.data.results);
      setProgress(100);
    });
  };

  useEffect(() => {
    movieDetail(id);
    getVideos(id);
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
          <div className="after-hero">
            <div className="after-hero-inner">
              <div className="all-you-want">
                <div className="want-text">
                  <img src={logo2} alt="Netflix" width={30} />
                  <span>Watch all you want.</span>
                </div>
                <div className="want-btn">
                  <a href="/" id="join-now">
                    Join Now
                  </a>
                </div>
              </div>
              <hr className="hr-movie" />
              <div className="tagline">
                <span>{movie.status}</span>
                <span className="tagline-inner">{movie.tagline}</span>
              </div>
              <hr className="hr-movie" />
              <div className="movie-videos">
                <div className="movie-videos-inner">
                  <div className="video-heading">
                    Videos | <span>{movie.title}</span>
                  </div>
                  <div className="videos-movie">
                    <OwlCarousel
                      className="slider-items owl-carousel"
                      {...options}
                    >
                      {videos.map((video) => {
                        return (
                          <div className="item" key={`${movie.id}`}>
                            <iframe
                              key={video.key}
                              title={video.name}
                              width="250"
                              height="140"
                              src={`https://www.youtube.com/embed/${video.key}`}
                              className="iframe-videos"
                            ></iframe>
                          </div>
                        );
                      })}
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
