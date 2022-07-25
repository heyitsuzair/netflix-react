import React from "react";
import { Link } from "react-router-dom";

export default function MoreLikeThis({ simliar, catid }) {
  return (
    <>
      <h2 className="more-details-h2">More Like This</h2>
      <div className="more-like-this">
        {simliar.map((simi) => {
          return (
            <div className="more-like-this-inner" key={simi.id}>
              <div className="row">
                <Link to={`/movie/${catid}/${simi.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${simi.poster_path}`}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
