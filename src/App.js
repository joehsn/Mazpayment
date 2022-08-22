import React  from 'react';
import { ThemeProvider } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import "bootstrap/dist/js/bootstrap";
// Components Imports
import Navbar from './components/Navbar'
import Slider from './components/Slider';
import System from './components/System';
import Process from './components/Process';
import Security from './components/Security';
import Methods from './components/Methods';
import Features from './components/Features';
import FQA from './components/FQA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  AOS.init({
    duration: 800
  });
  return (<>
    <ThemeProvider dir='rtl'>
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
  </>);
}