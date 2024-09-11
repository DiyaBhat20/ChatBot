import { useState } from 'react';
import RadioGroup from './RadioGroup';
import RightPanel from './RightPanel';

const BottomPanel = ({ isDarkMode }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`absolute bottom-5 w-[80%] rounded-2xl mx-2  flex justify-evenly max-h-fit items-center p-4 ${isDarkMode?'bg-[#565666]' : 'bg-[#051E3D]'} `}>
        <RadioGroup 
          selectedOption={selectedOption} 
          handleOptionChange={handleOptionChange} 
          isDarkMode={isDarkMode}
        />
        <RightPanel 
          selectedOption={selectedOption}
          isDarkMode={isDarkMode} 
        />
      </div>
    </div>
  );
};

export default BottomPanel;
