// ButtonAboutMe.js

import React from 'react';
import '../indexcss/ButtonAboutMe.css';

const ButtonAboutMe = ({ label }) => {
  return (
    <button className="hover-button">
      {label}
    </button>
  );
};

export default ButtonAboutMe;
