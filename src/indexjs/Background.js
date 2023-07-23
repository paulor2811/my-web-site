import React from 'react';
import '../indexcss/Background.css';

const Background = ({ darkTheme }) => {
  return <div className={`background ${darkTheme ? 'dark' : 'light'}`} />;
};

export default Background;
