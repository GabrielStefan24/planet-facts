import { Link } from "react-router-dom";
import "./SolarSystem.scss";
import { motion } from "framer-motion";

const SolarSystem = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      y: "0",
      scale: 1,
    },
    out: {
      opacity: 0,
      y: "-100vh",
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "spring",
    stiffness: 100,
    damping: 30,
    duration: 1.2,
  };
  return (
    <motion.div
      className="solar-syst"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="sun"></div>
      <Link to="/mercury">
        <div className="mercury"></div>
      </Link>
      <Link to="/venus">
        <div className="venus"></div>
      </Link>
      <Link to="/earth">
        <div className="earth"></div>
      </Link>
      <Link to="/jupiter">
        <div className="jupiter"></div>
      </Link>
      <Link to="/saturn">
        <div className="saturn"></div>
      </Link>
      <Link to="/uranus">
        <div className="uranus"></div>
      </Link>
      <Link to="/neptune">
        <div className="neptune"></div>
      </Link>
      <Link to="/pluto">
        <div className="pluto"></div>
      </Link>
      <div className="asteroids-belt"></div>
    </motion.div>
  );
};

export default SolarSystem;
