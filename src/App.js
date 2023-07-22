// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './indexcss/Main.css';
import Background from './indexjs/Background';
import ButtonHome from './indexjs/ButtonHome';
import ButtonAboutMe from './indexjs/ButtonAboutMe';
import ButtonMyProjects from './indexjs/ButtonMyProjects';
import ButtonContactMe from './indexjs/ButtonContactMe';
import ButtonShortcut from './indexjs/ButtonShortcut';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MyProjects from './pages/MyProjects';
import ContactMe from './pages/ContactMe';

const App = () => {
  return (
    <div className="main">
      <Router>
        <Background />
        <div className="content">
          <div className='shortcuts-container'>
            <ButtonShortcut />
          </div>
          <div className="navigation-buttons">
            {/* Use the Link component to navigate between pages */}
            <Link to="/home">
              <ButtonHome label="Home" />
            </Link>
            <Link to="/about">
              <ButtonAboutMe label="About" />
            </Link>
            <Link to="/projects">
              <ButtonMyProjects label="Projects" />
            </Link>
            <Link to="/contact">
              <ButtonContactMe label="Contact" />
            </Link>
          </div>
          {/* Define the routes using Routes and Route components */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<MyProjects />} />
            <Route path='/contact' element={<ContactMe />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
