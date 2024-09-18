import React, { useState } from 'react';
import BottomPanel from './components/BottomPanel';
import HeaderSection from './components/HeaderSection';
import { Main } from './components/Main';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [messages, setMessages] = useState([]);  // New state for messages

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('bg-[#1B1B2A]', !isDarkMode); 
  };

  // Function to add messages (text or file) to the state
  const addMessageToMainBox = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'bg-[#1B1B2A]' : 'bg-[#A8A6A6]'}`}>
      <HeaderSection isDarkMode={isDarkMode} toggleMode={toggleMode} />
      
      <Main isDarkMode={isDarkMode} messages={messages} /> {/* Pass messages to Main */}
      
      <BottomPanel isDarkMode={isDarkMode} addMessageToMainBox={addMessageToMainBox} /> {/* Pass the function */}
    </div>
  );
}

export default App;
