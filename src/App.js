import React from "react";
import "./style.scss";
import { ThemeProvider } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
// Components Imports
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import System from "./components/System";
import Process from "./components/Process";
import Security from "./components/Security";
import Methods from "./components/Methods";
import Features from "./components/Features";
import FQA from "./components/FQA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  AOS.init({
    duration: 800,
  });
  return (
    <>
      {loading ? (
        <div className="loader">
          <BarLoader color="#0d6efd" height={7.5} width={200} />
        </div>
      ) : (
        <ThemeProvider dir="rtl">
          <Navbar />
          <Slider />
          <System />
          <Process />
          <Security />
          <Methods />
          <Features />
          <FQA />
          <Contact />
          <Footer />
        </ThemeProvider>
      )}
    </>
  );
}
