// ProfilePicture.js

import React from 'react';
import profilePicture from '../resources/profile-picture.jpg';
import '../indexcss/ProfilePicture.css';

const ProfilePicture = () => {
  return (
    <div className="About-content">
      <div className="photo-container">
        <img src={profilePicture} alt="Paulo Ricardo" />
      </div>
    </div>
  );
};

export default ProfilePicture;