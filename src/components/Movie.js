import React from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/img/logo-2.png";
import logo2 from "../assets/img/favicon.ico";
import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "./Single Movie/Hero";
import AllYouWant from "./Single Movie/AllYouWant";
import Tagline from "./Single Movie/Tagline";
import MovieVideos from "./Single Movie/MovieVideos";
import MoreDetails from "./Single Movie/MoreDetails";
import MoreLikeThis from "./Single Movie/MoreLikeThis";
import Upcoming from "./Single Movie/Upcoming";
import Section6 from "./Section6";

export default function Movie({ setProgress }) {
  const [similar, setSimilar] = useState([]);
  const [movie, setMovie] = useState([]);
  const [videos, setVideos] = useState([]);
  const [coming, setComing] = useState([]);
  let { id, catid } = useParams();

  const movieDetail = async (idIncome) => {
    let url = `https://api.themoviedb.org/3/movie/${idIncome}?api_key=d33fd7ceb022bfce03f26f165fccb251&language=en-US `;
    setProgress(30);
    try {
      await axios.get(url).then((res) => {
        setMovie(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  };
  const getVideos = async (idIncome) => {
    let url = `https://api.themoviedb.org/3/movie/${idIncome}/videos?api_key=d33fd7ceb022bfce03f26f165fccb251&language=en-US `;
    setProgress(50);
    try {
      await axios.get(url).then((res) => {
        setVideos(res.data.results);
      });
    } catch (err) {
      console.err(err);
    }
  };
  const getSimilars = async (catIdIncome) => {
    let url = `https://api.themoviedb.org/3/movie/${catIdIncome}/similar?api_key=d33fd7ceb022bfce03f26f165fccb251&language=en-US `;
    setProgress(70);
    try {
      await axios.get(url).then((res) => {
        setSimilar(res.data.results);
      });
    } catch (err) {
      console.error(err);
    }
  };

  const comingSoon = async () => {
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=d33fd7ceb022bfce03f26f165fccb251&language=en-US&page=1`;
    setProgress(80);
    try {
      await axios.get(url).then((res) => {
        setComing(res.data.results);
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    movieDetail(id);
    getVideos(id);
    getSimilars(catid);
    comingSoon();

    //eslint-disable-next-line
  }, [id]);
  setProgress(100);
  console.log("100");
  document.title = `Netflix | ${movie.original_title}`;

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
          <Hero movie={movie} />

          <div className="after-hero">
            <div className="after-hero-inner">
              <AllYouWant />
              <hr className="hr-movie" />
              <Tagline movie={movie} />
              <hr className="hr-movie" />
              <MovieVideos videos={videos} movie={movie} />
              <MoreDetails movie={movie} />
              <MoreLikeThis simliar={similar} catid={catid} />
              <Upcoming coming={coming} />
              <Section6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
