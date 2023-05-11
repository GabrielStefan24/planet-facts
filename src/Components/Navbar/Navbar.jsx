import "./Navbar.scss";
import { Link } from "react-router-dom";
import { planets } from "../../data";
import { useEffect } from "react";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = () => {
  const [breakPoint, setBreakPoint] = useState(window.innerWidth);
  const tabletBreakPoint = 768;
  useEffect(() => {
    window.addEventListener("resize", () => {
      setBreakPoint(window.innerWidth);
    });
  }, [breakPoint]);

  return (
    <header className="nav">
      <div className="container">
        <h1>
          <Link className=" title" to="/">
            THE PLANETS
          </Link>
        </h1>
        {breakPoint >= tabletBreakPoint ? (
          <div className="planets">
            {planets.map((planet) => {
              return (
                <Link key={planet.id} to={planet.name} className="link">
                  {planet.name}
                </Link>
              );
            })}
          </div>
        ) : (
          <MobileMenu />
        )}
      </div>
    </header>
  );
};

export default Navbar;
