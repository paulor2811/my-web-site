// ButtonMyProjects.js

import React from 'react';
import '../indexcss/ButtonMyProjects.css';

const ButtonMyProjects = ({ label }) => {
  return (
    <button className="MyProjects-hover-button">
      {label}
    </button>
  );
};

export default ButtonMyProjects;
