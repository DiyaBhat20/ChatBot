import React from 'react';
import MainBox from './MainBox';

export const Main = ({ isDarkMode, messages }) => {
  return (
    <div className={`w-[80%] h-3/4 md:h-96 overflow-y-scroll mx-auto p-4 ${isDarkMode ? 'bg-[#1B1B2A] text-white' : 'bg-[#A8A6A6] text-black'}`}>
      <div className="flex flex-col items-end space-y-4">
        {messages.map((message, index) => (
          <MainBox key={index} isDarkMode={isDarkMode} message={message} />
        ))}
      </div>
    </div>
  );
};
