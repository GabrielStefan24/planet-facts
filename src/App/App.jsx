import "./App.scss";
import Background from "../Components/Background/Background";
import SolarSystem from "../Components/SolarSystem/SolarSystem";
import Navbar from "../Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Earth from "../Pages/Earth/Earth";
import Jupiter from "../Pages/Jupiter/Jupiter";
import Mars from "../Pages/Mars/Mars";
import Mercury from "../Pages/Mercury/Mercury";
import Neptune from "../Pages/Neptune/Neptune";
import Saturn from "../Pages/Saturn/Saturn";
import Uranus from "../Pages/Uranus/Uranus";
import Venus from "../Pages/Venus/Venus";

function App() {
  return (
    <Router>
      <Navbar />
      <Background />
      <Routes>
        <Route path="/" element={<SolarSystem />}></Route>
        <Route path="/earth" element={<Earth />}></Route>
        <Route path="/jupiter" element={<Jupiter />}></Route>
        <Route path="/mars" element={<Mars />}></Route>
        <Route path="/mercury" element={<Mercury />}></Route>
        <Route path="/neptune" element={<Neptune />}></Route>
        <Route path="/saturn" element={<Saturn />}></Route>
        <Route path="/uranus" element={<Uranus />}></Route>
        <Route path="/venus" element={<Venus />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
