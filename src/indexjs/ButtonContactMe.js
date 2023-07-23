// ButtonContactMe.js

import React from 'react';
import '../indexcss/ButtonContactMe.css';

const ButtonContactMe = ({ label }) => {
  return (
    <button className="ContactMe-hover-button">
      {label}
    </button>
  );
};

export default ButtonContactMe;
