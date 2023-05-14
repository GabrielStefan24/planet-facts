import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "./MobileMenu.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { planets } from "../../data";
import { Link } from "react-router-dom";

const variants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.7 } },
  exit: { x: "100%", transition: { duration: 0.3 } },
};

const MobileMenu = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const toggleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className="parent">
        {isMenuClicked ? (
          <>
            <AiOutlineClose
              onClick={toggleMenu}
              className="menu-icon"
              size={24}
            />
          </>
        ) : (
          <AiOutlineMenu className="menu-icon" size={24} onClick={toggleMenu} />
        )}
      </div>

      <AnimatePresence>
        {isMenuClicked && (
          <motion.div
            className="mobile-menu"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="menu-items">
              {planets.map((planet) => {
                return (
                  <motion.li
                    key={planet.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      ease: [0.66, 0.6, 0.8, 0.78],
                      duration: 0.7,
                      delay: `${(planet.id * 5 + 0.5) / 70}`,
                    }}
                  >
                    <span style={{ color: `${planet.color}` }}>• </span>
                    <Link
                      to={planet.name}
                      onClick={() => {
                        setIsMenuClicked(false);
                      }}
                    >
                      {planet.name}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
