import "./Navbar.scss";
import { Link } from "react-router-dom";
import { planets } from "../../data";

const Navbar = () => {
  return (
    <header className="nav">
      <div className="container">
        <h1>
          <Link className=" title">THE PLANETS</Link>
        </h1>
        <div className="planets">
          {planets.map((planet) => {
            return (
              <Link key={planet.id} to={planet.name} className="link">
                {planet.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
