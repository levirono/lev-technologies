// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Blogs from './components/Blogs';
import Reviews from './components/Reviews';
import Store from './components/Store';
import Navigation from './components/Navigation';
// import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Services />} />
        <Route path="/skills" element={<Blogs/>} />
        <Route path="/projects" element={<Reviews />} />
        <Route path="/contact" element={<Store/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
};

export default App;
