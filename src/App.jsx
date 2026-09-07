import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/about";
import Training from "./Pages/training";
import Jobs from "./Pages/Jobs";
import Contact from "./Pages/contact";
import Login from "./Pages/Login";
import GetStarted from "./Pages/GetStarted";
import HireTalent from "./Pages/HireTalent";
import ExploreCareers from "./components/ExploreCareers";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/training" element={<Training />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/hire-talent" element={<HireTalent />} />
      <Route path="/ExploreCareer" element={<ExploreCareers />} />
    </Routes>
  );
}

export default App;