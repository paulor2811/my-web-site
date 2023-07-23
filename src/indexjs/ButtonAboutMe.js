// ButtonAboutMe.js

import React from 'react';
import '../indexcss/ButtonAboutMe.css';

const ButtonAboutMe = ({ label }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Para uma rolagem suave, use 'smooth'
    });
  };

  return (
    <button className="AboutMe-hover-button" onClick={scrollToTop}>
      {label}
    </button>
  );
};

export default ButtonAboutMe;