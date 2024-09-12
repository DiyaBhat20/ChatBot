import { useEffect, useState } from 'react';
import RadioGroup from './RadioGroup';

import TextInput from '../Input/TextInput';
import { FaArrowUp, FaBars } from 'react-icons/fa';

const BottomPanel = ({ isDarkMode }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [display,setDisplay]=useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint (768px)
        setDisplay(!display);
      }
    }
    handleResize();
    },[]);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (window.innerWidth < 768) { // md breakpoint (768px)
      setDisplay(false);
    }
   
  };

  
  return (
    <div className="flex justify-center items-center w-svw fixed bottom-1">
      <div className={`absolute bottom-5 w-[80%] rounded-2xl mx-2  flex flex-col md:flex-row justify-evenly  md:items-center p-4 ${isDarkMode?'bg-[#565666]' : 'bg-[#051E3D]'} `}>
       {
        display===true? 
        <RadioGroup 
        selectedOption={selectedOption} 
        handleOptionChange={handleOptionChange} 
        isDarkMode={isDarkMode}
      />:<></>
       }
        <div className={`relative md:w-[60%] w-full ${isDarkMode ? 'bg-[#1B1B2A]' : 'bg-[#A8A6A6]'} px-8  rounded-3xl md:h-48`}>
     
     <div className=" h-full py-1 flex"> 
     <FaBars className={`mt-2 block md:hidden`} onClick={()=>setDisplay(!display)}/>

       <TextInput  isDarkMode={isDarkMode} selectedOption={selectedOption}/>
     </div>

     <button className={`absolute bottom-2 text-sm right-5 border w-6 h-6 md:w-10 md:h-10 flex justify-center items-center rounded-full ${isDarkMode ? 'bg-[#1B1B2A] border-black hover:bg-[#10101a]' : 'bg-[#A8A6A6] border-black hover:bg-[#9d9b9b]'}`}>
       <FaArrowUp className="w-3 h-3 md:h-6 md:w-6" />
     </button>
   </div>
      </div>
    </div>
  );
};

export default BottomPanel;
