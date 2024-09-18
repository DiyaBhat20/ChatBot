import React, { useState } from 'react';

const TextInput = ({ isDarkMode, selectedOption, input, setInput, handleFileInput }) => {
  const [error, setError] = useState('');  // For validation errors

  // Validate file input for specific options (e.g., image for location)
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Validation for "Find Location" - only image files allowed
    if (selectedOption === "Find Location and Generate Google Maps Link") {
      if (file && file.type.startsWith('image/')) {
        handleFileInput(file);
        setError('');
      } else {
        handleFileInput(null);
        setError('Please upload a valid image file for Google Maps.');
      }
    } 
    // Validation for "Audio Transcription" - only audio files allowed
    else if (selectedOption === "Audio Transcription & Summarization") {
      if (file && file.type.startsWith('audio/')) {
        handleFileInput(file);
        setError('');
      } else {
        handleFileInput(null);
        setError('Please upload a valid audio file.');
      }
    }
  };

  if (selectedOption === "Text Summarization" || selectedOption === "Psychological Profile Summarization") {
    return (
      <textarea
        className={`w-full h-full bg-transparent outline-none resize-none px-2 py-4 box-border ${isDarkMode ? 'text-white' : 'text-black'} placeholder-[#1B1B2A]`}
        placeholder="Message ChatBot"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    );
  } else if (selectedOption === "Audio Transcription & Summarization") {
    return (
      <form className="flex flex-col items-center gap:4 justify-center w-[90%] h-full py-4 sm:flex-row ">
        <div className="flex justify-center items-center sm:w-full h-[60px] sm:h-full sm:pt-8 border-slate-600 border-dashed border-2 rounded-lg p-3 sm:py-4 sm:px-2 box-border">
          <input
            type="file"
            accept="audio/*"
            className="w-full h-full bg-transparent border-none"
            onChange={handleFileChange}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    );
  } else if (selectedOption === "Find Location and Generate Google Maps Link") {
    return (
      <form className="flex flex-col items-center gap:4 justify-center h-full sm:gap-8 py-4 sm:flex-row">
        {/* Image upload */}
        <div className="flex justify-center items-center w-full sm:h-full h-[60px] border-slate-600 border-dashed border-2  rounded-lg">
          <input
            type="file"
            accept="image/*"
            className={`sm:py-[50px] py-3 px-6 w-full h-full bg-transparent border-slate-400 ${isDarkMode ? 'text-slate-400' : 'text-slate-700 placeholder-[#1B1B2A]'}`}
            onChange={handleFileChange}
          />
        </div>

        <div className={`bg-transparent border-slate-400 rounded-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-700 placeholder-[#1B1B2A]'}`}>
          Or
        </div>

        {/* Text description input */}
        <div className="w-full sm:h-full h-[60px] border-slate-600 border-dashed border-2 rounded-lg">
          <textarea
            placeholder="Describe the location..."
            className={`p-2 w-full h-full bg-transparent outline-none ${isDarkMode ? 'text-white placeholder-slate-400' : 'text-black placeholder-slate-700'}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    );
  } else {
    return (
      <div className={`w-full h-full bg-transparent outline-none resize-none px-2 py-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        Select any one option
      </div>
    );
  }
};

export default TextInput;
