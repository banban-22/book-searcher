import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const getStorage = () => {
  let colorMode = 'light-mode';
  if (localStorage.getItem('colorMode')) {
    colorMode = localStorage.getItem('colorMode');
  }
  return colorMode;
};

const DarkMode = () => {
  const [isOn, setIsOn] = useState(false);
  const [colorMode, setColorMode] = useState(getStorage);
  const toggleBtn = () => {
    if (colorMode === 'light-mode') {
      setColorMode('dark-mode');
    } else {
      setColorMode('light-mode');
    }
    setIsOn((isOn) => !isOn);
  };

  useEffect(() => {
    document.documentElement.className = colorMode;
    localStorage.setItem('colorMode', colorMode);
  }, [colorMode]);

  return (
    <main>
      <div>
        <button className="px-8 py-3 mt-5 ml-5 text-2xl" onClick={toggleBtn}>
          {isOn ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </button>
      </div>
    </main>
  );
};

export default DarkMode;
