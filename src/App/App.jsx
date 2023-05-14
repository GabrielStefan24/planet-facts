import "./App.scss";
import Background from "../Components/Background/Background";
import SolarSystem from "../Components/SolarSystem/SolarSystem";
import Navbar from "../Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Planet from "../Components/Planet/Planet";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Background />
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={<SolarSystem />}
            key={location.pathname}
          ></Route>
          <Route
            path="/:planet"
            element={<Planet />}
            key={location.pathname}
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
