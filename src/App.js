import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/style.css";
import "./styles/preload.css";
import "./styles/scrollbar.css";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/projects.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import contact from "./Assets/contact.webp";
import eletric_go_1 from "./Assets/eletric_go_1.webp";
import home from "./Assets/home-bg.webp";
import morny_1 from "./Assets/morny_1.webp";
import profile_image from "./Assets/profile_image.webp";
import schedulexp_1 from "./Assets/schedulexp_1.webp";
import slippage_saver_1 from "./Assets/slippage_saver_1.webp";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    // Function to preload images
    const preloadImages = async () => {
      const imageUrls = [
        contact,
        eletric_go_1,
        home,
        morny_1,
        profile_image,
        schedulexp_1,
        slippage_saver_1,
      ];

      // Create an array of promises to load images
      const promises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        // Wait for all images to be loaded
        await Promise.all(promises);
        // Once all images are loaded, set load state to false
        updateLoad(false);
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    // Call the preloadImages function
    preloadImages();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
