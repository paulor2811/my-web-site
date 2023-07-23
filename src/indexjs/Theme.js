import React, { useEffect, useState } from "react";
import '../indexcss/Theme.css';

const Theme = ({ darkTheme, setDarkTheme }) => {
    const handleThemeToggle = () => {
        setDarkTheme(!darkTheme);
    };

    useEffect(() => {
        const checkbox = document.querySelector('.checkbox');
        checkbox.checked = darkTheme;
    }, [darkTheme]);

    return (
        <div className="toggle-switch">
            <label className="switch-label">
                <input type="checkbox" className="checkbox" onChange={handleThemeToggle} />
                <span className="slider"></span>
            </label>
        </div>  
    );
};

export default Theme;
