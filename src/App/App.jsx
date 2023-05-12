import "./App.scss";
import Background from "../Components/Background/Background";
import SolarSystem from "../Components/SolarSystem/SolarSystem";
import Navbar from "../Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Planet from "../Components/Planet/Planet";


function App() {
  return (
    <Router>
      <Navbar />
      <Background />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<SolarSystem />}></Route>
          <Route path="/:planet" element={<Planet />}></Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
