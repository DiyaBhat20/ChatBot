const TextInput = ({isDarkMode,selectedOption}) => {
  if(selectedOption==="Text Summarization" || selectedOption==="Psychological Profile Summarization")
  {return (
    <div className="w-full h-full bg-transparent">
      <textarea 
        className={`w-full h-full bg-transparent outline-none resize-none px-2 py-1 ${isDarkMode?'text-white':'text-black placeholder-[#1B1B2A]'}`} 
        placeholder="Message ChatBot">
      </textarea>
    </div>
  );}

  else if(selectedOption==="Audio Transcription & Summarization")
  {
    return(
      <>
      </>
    );
  }

  else if(selectedOption==="Find Location and Generate Google Maps Link")
    {
      return(
        <>
        </>
      );
    }  

  else{
    return(
      <div className={`w-full h-full bg-transparent outline-none resize-none px-2 py-1 ${isDarkMode?'text-white':'text-black'}`}>Select any one option</div>
    );
  }
}

export default TextInput;
