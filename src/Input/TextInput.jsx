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
        <form className="flex items-center justify-center h-full gap-6">
        <div className="w-full h-full border-slate-600 p-2">
      <input type="file" id="imageUpload" name="imageFile" accept="image/*" className={`outline-dashed rounded-lg text-sm py-5 md:py-[50px] px-6 w-full h-full bg-transparent border-slate-400 ${isDarkMode?'text-slate-400':'text-slate-700 placeholder-[#1B1B2A]'}`}/>
      </div>

      <div className={`bg-transparent  border-slate-400 rounded-lg ${isDarkMode?'text-slate-400':'text-slate-700 placeholder-[#1B1B2A]'}`}>Or</div>
      
      <div className="w-full h-full border-slate-600 p-2">
      <textarea id="imageDescription" name="imageDescription" placeholder="Describe the image..." className={`outline-dashed p-2 w-full h-full bg-transparent border-slate-400 rounded-lg ${isDarkMode?'text-slate-400':'text-slate-700 placeholder-[#1B1B2A]'}`} ></textarea>
      </div>

      </form>
        </>
      );
    }  

  else{
    return(
      <div className={`w-full h-full text- bg-transparent outline-none resize-none px-2 py-1 ${isDarkMode?'text-white':'text-black'}`}>Select any one option</div>
    );
  }
}

export default TextInput;
