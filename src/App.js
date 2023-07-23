// App.js

import React from 'react';
import './indexcss/Main.css';
import Background from './indexjs/Background';
import ButtonAboutMe from './indexjs/ButtonAboutMe';
import ButtonMyProjects from './indexjs/ButtonMyProjects';
import ButtonContactMe from './indexjs/ButtonContactMe';
import ButtonShortcut from './indexjs/ButtonShortcut';
import ProfilePicture from './indexjs/ProfilePicture';

const App = () => {
  return (
    <div className="main">
      <Background />
      <div className="content">
       <div className='shortcuts-container'>
          <ButtonShortcut />
        </div>
        <div className='shadow-box'>
          <span className='span-name'>Paulo Ricardo</span>
          <div className="navigation-buttons">
            <ButtonAboutMe label="About" />
            <ButtonMyProjects label="Projects" />
            <ButtonContactMe label="Contact" />
          </div>
        </div>
        <div className='content-about'>
          <ProfilePicture />
          <h1 className='content-about-name'>Paulo Ricardo</h1>
          <h2 className='content-about-description'>Student & Java Developer</h2>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
        </div>
      </div>
    </div>
  );
};

export default App;
