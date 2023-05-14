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
  let viewContent =
    currentView === "overview"
      ? "overview"
      : currentView === "structure"
      ? "structure"
      : "geology";


  return (
    <motion.section

    >
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
              key={`${planetInfo.name}_overview`}
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
              key={`${planetInfo.name}_structure`}
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
              key={`${planetInfo.name}_geology`}
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
        <motion.div
          key={planetInfo.name}
          className="planet-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2>{planetInfo.name}</h2>

          <motion.p
            key={planetInfo[viewContent].content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            {planetInfo[viewContent].content}
          </motion.p>

          <div className="wikipedia">
            <span className="source">Source: </span>
            <a href={planetInfo[viewContent].source} className="wiki">
              Wikipedia
            </a>
          </div>
        </motion.div>
        <motion.div
          className="planet-buttons"
          key={planetInfo.sectionColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
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
        </motion.div>
      </div>
      <div className="parent">
        <motion.div
          key={planetInfo.id}
          className="planet-info"
          initial={{ y: "100%" }} // initial state: move the div down by the height of the viewport
          animate={{ y: 0 }} // animate state: move the div back to its original position
          exit={{ y: "100%" }} // exit state: move the div down by the height of the viewport
          transition={{ type: "spring", damping: 15 }} // transition settings
        >
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Planet;
