import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import './indexcss/Main.css';
import Background from './indexjs/Background';
import Theme from './indexjs/Theme';
import ButtonAboutMe from './indexjs/ButtonAboutMe';
import ButtonMyProjects from './indexjs/ButtonMyProjects';
import ButtonContactMe from './indexjs/ButtonContactMe';
import ButtonShortcut from './indexjs/ButtonShortcut';
import ProfilePicture from './indexjs/ProfilePicture';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true); // Iniciar como escuro (true)

  return (
    <div className={`main ${darkTheme ? 'dark' : ''} ${isMobile ? 'mobile' : ''}`}>
      <Background darkTheme={darkTheme} />
      <Theme darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div className="content">
        {/* Remove o segundo componente "Theme" aqui */}
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
          {/* Resto do código... */}
        </div>
      </div>
    </div>
  );
};

export default App;
