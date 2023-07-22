// ButtonHome.js

import React from 'react';
import '../indexcss/ButtonHome.css';

const ButtonHome = ({ label }) => {
  return (
    <button className="hover-button">
      {label}
    </button>
  );
};

export default ButtonHome;
