import React from "react";
import Carousel from "./categories/Carousel";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OnlyOnSlider({ setProgress }) {
  setProgress(30);
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCats = async () => {
    setProgress(60);
    let url =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=d33fd7ceb022bfce03f26f165fccb251&language=en-US ";
    try {
      await axios.get(url).then((res) => {
        setProgress(75);
        setCats(res.data.genres);
        setLoading(false);

        setProgress(85);
        setProgress(100);
      });
    } catch (err) {
      console.error(err);

      setProgress(85);
      setProgress(100);
    }
  };
  useEffect(() => {
    getCats();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="onlyon-sec">
          <div className="onlyon-slider-inner">
            {cats.map((cat) => {
              return (
                <Carousel
                  title={`${cat.name}`}
                  setProgress={setProgress}
                  cat_id={cat.id}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
