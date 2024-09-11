import React, { useState } from 'react';
import BottomPanel from './components/BottomPanel';
import './App.css'; 
import HeaderSection from './components/HeaderSection';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('bg-[#1B1B2A]', !isDarkMode); 
  };

  return (
    <div className={`${isDarkMode ? 'bg-[#1B1B2A]' : 'bg-[#A8A6A6]'}`}>
      <HeaderSection isDarkMode={isDarkMode} toggleMode={toggleMode}/>

      <BottomPanel isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
