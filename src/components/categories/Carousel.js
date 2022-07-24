import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Carousel({ title, cat_id, setProgress }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getImages = async (catId) => {
    setProgress(50);
    let url = `https://api.themoviedb.org/3/movie/${catId}/similar?api_key=d33fd7ceb022bfce03f26f165fccb251&language=en-US `;

    setProgress(80);
    await axios.get(url).then((res) => {
      setMovies(res.data.results);
      setLoading(false);
    });
    setProgress(100);
  };
  useEffect(() => {
    getImages(cat_id);
    //eslint-disable-next-line
  }, []);
  const options = {
    margin: 7,
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
        items: 2,
      },
      600: {
        items: 3,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <>
      <h1>{title}</h1>
      {loading ? (
        ""
      ) : (
        <OwlCarousel className="slider-items owl-carousel" {...options}>
          {movies.map((movie) => {
            return (
              <div className="item" key={`${movie.id}`}>
                <Link to={`/movie/${movie.id}`} id={`${movie.id}`}>
                  <img
                    alt="img"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  />
                </Link>
                <h6>{movie.original_title}</h6>
              </div>
            );
          })}
        </OwlCarousel>
      )}
    </>
  );
}
