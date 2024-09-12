import { FiSun, FiMoon } from 'react-icons/fi';

const HeaderSection=({isDarkMode,toggleMode})=>{
  return(
    <header className={`top-0 left-0 w-full h-16 ${isDarkMode?'bg-[#A8A6A6] text[#051E3D]':'bg-[#051E3D] text-[#A8A6A6]'} flex justify-between items-center px-4 z-50`}>
      <div className="text-xl font-bold">
        ChatBot
      </div>

      <button
        onClick={toggleMode}
        className={`w-10 h-10 rounded-full flex justify-center items-center 
        ${isDarkMode ? 'bg-[#565666] text-white' : 'bg-[#F0F0F0] text-gray-800'} 
        transition duration-300`}
      >
        {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
    </header>
  );
}

export default HeaderSection;