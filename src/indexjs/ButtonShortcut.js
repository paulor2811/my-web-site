// ButtonShortcut.js

import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../indexcss/ButtonShortcut.css'; // Arquivo de estilos CSS

const ButtonShortcut = () => {
  return (
    <div className="shortcuts-container">
      <a href='https://github.com/paulor2811' className='shortcut-github' target="_blank" rel='noopener noreferrer'>
        <FaGithub size={30} />
      </a>
      <a href='https://www.linkedin.com/in/paulo-ricardo-730566226/' className='shortcut-linkedin' target="_blank" rel='noopener noreferrer'>
        <FaLinkedin size={30} />
      </a>
      <a href='https://api.whatsapp.com/send?phone=5543999628432' className='shortcut-whatsapp' target="_blank" rel='noopener noreferrer'>
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default ButtonShortcut;
