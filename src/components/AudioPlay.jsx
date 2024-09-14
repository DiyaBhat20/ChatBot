import React, { useState, useEffect } from "react";

var a;
const AudioPlay = () => {
  const [buttonName, setButtonName] = useState("Play");

  const [audio, setAudio] = useState();

  useEffect(() => {
    if (a) {
      a.pause();
      a = null;
      setButtonName("Play");
    }
    if (audio) {
      a = new Audio(audio);
      a.onended = () => {
        setButtonName("Play");
      };
    }
  }, [audio]);

  const handleClick = () => {
    if (buttonName === "Play") {
      a.play();
      setButtonName("Pause");
    } else {
      a.pause();
      setButtonName("Play");
    }
  };

  const addFile = (e) => {
    if (e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="bg-400 h-36 w-96 flex justify-center items-center border-dashed border-2 border-slate-600 rounded-lg text-slate-600">
      <input type="file" onChange={addFile} />
      <button onClick={handleClick} className="bg-white px-3 py-1 rounded-lg">{buttonName}</button>
    </div>
  );
};

export default AudioPlay;