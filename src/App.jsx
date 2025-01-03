import React from "react";
import './index.css';
import AboutUs from "./pages/About/AboutUs";
import Contact from "./pages/ContactUs/ContactUs";
import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar/Navbar";
import { Registration } from "./pages/Registration/registration";
import Speaker from "./pages/Speakers/Speakers";
import Workshops from "./pages/Workshops/Workshops";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Updates from "./pages/Updates/Updates"
import Footer from "./pages/Footer/Footer"; // Uncomment if needed
import ComingSoon from "./pages/ComingSoon/ComingSoon";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Registration />
      {/* <Speaker />*/}
       <Updates/>
      <Workshops /> 
      <Contact />
      <Footer />
      </>
            }
          />
          <Route
            path="/coming-soon"
            element={
              <ComingSoon />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
