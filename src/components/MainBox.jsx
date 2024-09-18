const MainBox = ({ isDarkMode, message }) => {
  return (
    <div className={`inline-block mt-4 w-auto bg-white bg-opacity-40 max-w-full h-auto rounded-xl mr-0 ml-auto ${isDarkMode ? 'text-white' : 'text-black'}`}>
      <div className="py-4 px-6">
        {message.text ? <p>{message.text}</p> : null}
        {message.file ? (
          <div className="mt-2">
            {message.file.type.startsWith('audio/') && (
              <audio controls src={URL.createObjectURL(message.file)} />
            )}
            {message.file.type.startsWith('image/') && (
              <img src={URL.createObjectURL(message.file)} alt="Uploaded file" className="max-w-full h-auto" />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MainBox;
