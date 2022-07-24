import "./App.css";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import Section6 from "./components/Section6";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OnlyOn from "./components/OnlyOn";
import Movie from "./components/Movie";

function App() {
  const [progress, setProgress] = useState(0);
  const setProgressTo = (setProgressTo) => {
    setProgress(setProgressTo);
  };

  return (
    <div className="App">
      <LoadingBar olor="#f11946" progress={progress} height={3} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
              </>
            }
          />
          <Route
            path="/onlyon"
            element={<OnlyOn setProgress={setProgressTo} />}
          />
          <Route
            path="/movie/:id"
            element={<Movie setProgress={setProgressTo} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
