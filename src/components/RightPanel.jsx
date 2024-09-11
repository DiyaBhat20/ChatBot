import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import TextInput from '../Input/TextInput';

const RightPanel = ({ selectedOption, isDarkMode }) => {

  return (
      <div className={`relative w-[60%] ${isDarkMode ? 'bg-[#1B1B2A]' : 'bg-[#A8A6A6]'} px-8 py-5 rounded-3xl h-48`}>
      <div className=" h-full pr-14"> 
        <TextInput  isDarkMode={isDarkMode} selectedOption={selectedOption}/>
      </div>

      <button className={`absolute bottom-5 right-5 border w-10 h-10 flex justify-center items-center rounded-full ${isDarkMode ? 'bg-[#1B1B2A] border-black hover:bg-[#10101a]' : 'bg-[#A8A6A6] border-black hover:bg-[#9d9b9b]'}`}>
        <FaArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default RightPanel;
