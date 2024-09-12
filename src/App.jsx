// App.js
import React, { useState } from 'react';
import BottomPanel from './components/BottomPanel';
import HeaderSection from './components/HeaderSection';
import { Main } from './components/Main';
import './App.css'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('bg-[#1B1B2A]', !isDarkMode); 
  };

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-[#1B1B2A]' : 'bg-[#A8A6A6]'}`}>
      <HeaderSection isDarkMode={isDarkMode} toggleMode={toggleMode} />
      
    
        <Main  isDarkMode={isDarkMode}/>
  
      
      <BottomPanel isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
