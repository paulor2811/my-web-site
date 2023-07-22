// ButtonContactMe.js

import React from 'react';
import '../indexcss/ButtonHome.css';

const ButtonContactMe = ({ label }) => {
  return (
    <button className="hover-button">
      {label}
    </button>
  );
};

export default ButtonContactMe;
