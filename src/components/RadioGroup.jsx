import React from 'react';

const RadioGroup = ({ selectedOption, handleOptionChange, isDarkMode }) => {

  return (
    <div className={` radio-group flex flex-col gap-3 md:w-1/3  md:mb-3 md:ml-0  ml-0 mx-4 mb-3 w-full`}>
      <label className={`radio-item py-1 px-4 rounded-3xl text-md    ${isDarkMode ? 'bg-[#1B1B2A] text-white' : 'bg-[#A8A6A6] text-black'}`}>
        <input 
          type="radio" 
          value="Text Summarization" 
          checked={selectedOption === 'Text Summarization'} 
          onChange={handleOptionChange} 
          className="mr-2"
        />
        Text Summarization
      </label>

      <label className={`radio-item py-1 px-4 rounded-3xl text-md ${isDarkMode ? 'bg-[#1B1B2A] text-white' : 'bg-[#A8A6A6] text-black'}`}>
        <input 
          type="radio" 
          value="Audio Transcription & Summarization" 
          checked={selectedOption === 'Audio Transcription & Summarization'} 
          onChange={handleOptionChange} 
          className="mr-2"
        />
        Audio Transcription and Summarization
      </label>

      <label className={`radio-item py-1 px-4 rounded-3xl text-md ${isDarkMode ? 'bg-[#1B1B2A] text-white' : 'bg-[#A8A6A6] text-black'}`}>
        <input 
          type="radio" 
          value="Psychological Profile Summarization" 
          checked={selectedOption === 'Psychological Profile Summarization'} 
          onChange={handleOptionChange} 
          className="mr-2"
        />
        Psychological Profile Summarization
      </label>

      <label className={`radio-item py-1 px-4 rounded-3xl text-md ${isDarkMode ? 'bg-[#1B1B2A] text-white' : 'bg-[#A8A6A6] text-black'}`}>
        <input 
          type="radio" 
          value="Find Location and Generate Google Maps Link" 
          checked={selectedOption === 'Find Location and Generate Google Maps Link'} 
          onChange={handleOptionChange} 
          className="mr-2"
        />
        Find Location and Generate Google Maps Link
      </label>
    </div>
  );
};

export default RadioGroup;
