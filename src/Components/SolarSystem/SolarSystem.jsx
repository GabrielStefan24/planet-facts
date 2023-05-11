import { Link } from "react-router-dom";
import "./SolarSystem.scss";

const SolarSystem = () => {
  return (
    <div className="solar-syst">
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
    </div>
  );
};

export default SolarSystem;
