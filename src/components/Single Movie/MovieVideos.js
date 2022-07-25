import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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

export default function MovieVideos({ videos, movie }) {
  return (
    <div className="movie-videos">
      <div className="movie-videos-inner">
        <div className="video-heading">
          Videos | <span>{movie.title}</span>
        </div>
        <div className="videos-movie">
          <OwlCarousel className="slider-items owl-carousel" {...options}>
            {videos.map((video) => {
              return (
                <div className="item" key={video.name}>
                  <iframe
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
  );
}
