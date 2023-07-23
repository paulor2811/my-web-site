import React, { useState } from 'react';
import './indexcss/Main.css';
import Background from './indexjs/Background';
import Theme from './indexjs/Theme';
import ButtonAboutMe from './indexjs/ButtonAboutMe';
import ButtonMyProjects from './indexjs/ButtonMyProjects';
import ButtonContactMe from './indexjs/ButtonContactMe';
import ButtonShortcut from './indexjs/ButtonShortcut';
import ProfilePicture from './indexjs/ProfilePicture';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false); // Iniciar como claro (false)

  return (
    <div className={`main ${darkTheme ? 'dark' : ''}`}>
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
