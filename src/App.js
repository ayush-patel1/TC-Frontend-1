import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aavartan from "./pages/Aavartan";
import Vigyaan from "./pages/Vigyaan";
import Journey from "./sections/OurJourney";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/aavartan" element={<Aavartan />} />
          <Route exact path="/vigyaan" element={<Vigyaan />} />
          <Route exact path="/journey" element={<Journey />} />
          {/* <Route exact path="/events" element={<EventPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
