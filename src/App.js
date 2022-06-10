import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "./Booking";
import Home from "./Home.js";
import ListOfServices from "./ListOfServices";
import OurEmployees from "./OurEmployees";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ProjectSite" element={<Home />} />
        <Route path="/ListOfServices" element={<ListOfServices />} />
        <Route path="/OurEmployees" element={<OurEmployees />} />
        <Route path="/Booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
