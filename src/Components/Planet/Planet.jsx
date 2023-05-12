import { useParams } from "react-router-dom";
import { planetsData } from "../../planetsData";
import "./Planet.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Planet = () => {
  const [currentView, setCurrentView] = useState("overview");
  const { planet } = useParams();
  const planetInfo = planetsData.find(
    (p) => p.name.toLowerCase() === planet.toLowerCase()
  );

  const [breakPoint, setBreakPoint] = useState(window.innerWidth);
  const tabletBreakPoint = 768;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setBreakPoint(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setBreakPoint(window.innerWidth);
      });
    };
  }, [breakPoint]);
  useEffect(() => {
    setCurrentView("overview");
  }, [planet]);
  const handleButtonClick = (view) => {
    setCurrentView(view);
    console.log(view);
  };

  return (
    <section className="section-container">
      <div className="planet-container">
        <div
          className="planet-image"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 80,
          }}
          key={planet}
        >
          {currentView === "overview" && (
            <motion.img
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 80,
              }}
              key={planetInfo}
              src={planetInfo.images.planet}
              alt="Planet image"
              className="img"
            />
          )}
          {currentView === "structure" && (
            <motion.img
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 80,
              }}
              key={planetInfo}
              src={planetInfo.images.internal}
              alt="Planet image"
              className="img"
            />
          )}
          {currentView === "geology" && (
            <motion.div
              className="relative"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 80,
              }}
              key={planetInfo}
            >
              <img
                src={planetInfo.images.planet}
                alt="Planet image"
                className="img"
              />
              <img
                src={planetInfo.images.geology}
                alt="Planet image"
                className="geology"
              />
            </motion.div>
          )}
        </div>
        <div className="planet-description">
          <h2>{planetInfo.name}</h2>
          <p>{planetInfo.overview.content}</p>
          <div className="wikipedia">
            <span className="source">Source: </span>
            <a
              href={`https://en.wikipedia.org/wiki/${planetInfo.name}`}
              className="wiki"
            >
              Wikipedia
            </a>
          </div>
        </div>
        <div className="planet-buttons">
          <button
            className={currentView === "overview" ? "button active" : "button"}
            onClick={() => handleButtonClick("overview")}
            style={
              currentView === "overview" && tabletBreakPoint < window.innerWidth
                ? { backgroundColor: planetInfo.sectionColor }
                : {}
            }
          >
            Overview
            <span
              className="underline"
              style={{ backgroundColor: planetInfo.sectionColor }}
            ></span>
          </button>
          <button
            className={currentView === "structure" ? "button active" : "button"}
            onClick={() => handleButtonClick("structure")}
            style={
              currentView === "structure" &&
              tabletBreakPoint < window.innerWidth
                ? { backgroundColor: planetInfo.sectionColor }
                : {}
            }
          >
            {breakPoint >= tabletBreakPoint ? "internal stucture" : "structure"}{" "}
            <span
              className="underline"
              style={{ backgroundColor: planetInfo.sectionColor }}
            ></span>
          </button>
          <button
            className={currentView === "geology" ? "button active" : "button"}
            onClick={() => handleButtonClick("geology")}
            style={
              currentView === "geology" && tabletBreakPoint < window.innerWidth
                ? { backgroundColor: planetInfo.sectionColor }
                : {}
            }
          >
            {breakPoint >= tabletBreakPoint ? "surface geology " : "surface"}
            <span
              className="underline"
              style={{ backgroundColor: planetInfo.sectionColor }}
            ></span>
          </button>
        </div>
      </div>
      <div className="planet-info">
        <div className="item">
          <h3>Rotation time</h3>
          <p>{planetInfo.rotation}</p>
        </div>
        <div className="item">
          <h3>revolution time</h3>
          <p>{planetInfo.revolution}</p>
        </div>
        <div className="item">
          <h3>radius</h3>
          <p>{planetInfo.radius}</p>
        </div>
        <div className="item">
          <h3>average temp</h3>
          <p>{planetInfo.temperature}</p>
        </div>
      </div>
    </section>
  );
};

export default Planet;
