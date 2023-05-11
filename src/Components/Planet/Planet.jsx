import { useParams } from "react-router-dom";
import { planetsData } from "../../planetsData";
import "./Planet.scss";

const Planet = () => {
  const { planet } = useParams();
  const planetInfo = planetsData.find(
    (p) => p.name.toLowerCase() === planet.toLowerCase()
  );
  if (!planetInfo) {
    return <h2>Planet does not exist</h2>;
  }
  return (
    <section className="section-container">
      <div className="planet-container">
        <div className="planet-image">
          <img src={planetInfo.images.planet} alt="Planet image" />
        </div>
        <div className="planet-description">
          <h2>{planetInfo.name}</h2>
          <p>{planetInfo.overview.content}</p>
        </div>
        <div className="planet-buttons">
          <button>Overview</button>
          <button>internal structure</button>
          <button>surface geology</button>
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
