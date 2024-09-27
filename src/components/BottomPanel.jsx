import { useEffect, useState } from 'react';
import RadioGroup from './RadioGroup';
import TextInput from '../Input/TextInput';
import { FaArrowUp, FaBars } from 'react-icons/fa';
import axios from 'axios';
import Cookies from 'js-cookie';



const BottomPanel = ({ isDarkMode, addMessageToMainBox ,setMessages}) => {
  const [input, setInput] = useState("");  // Manage text input state
  const [fileInput, setFileInput] = useState(null);  // Manage file input state (image or audio)
  const [selectedOption, setSelectedOption] = useState('');
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState('');  // Validation errors

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint (768px)
        setDisplay(!display);
      }
    };
    handleResize();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if (window.innerWidth < 768) { // md breakpoint (768px)
      setDisplay(false);
    }
  };

  const handleClick = () => {
    let message = { text: input, file: fileInput, option: selectedOption };

    if (selectedOption === "Find Location and Generate Google Maps Link") {
      if (!input) {
        setError('Please provide a location description.');
        return;
      }
    
      const getData = async () => {
        try {
          const endpoint = 'http://127.0.0.1:8000/api/find-location/'; // Endpoint for location description
          const res = await axios.post(endpoint, { description: input });
    
          console.log('Response from description endpoint:', res.data);
          addMessageToMainBox({text:res.data,file:null,option:"Find Location and Generate Google Maps Link"});
          if (res.data.latitude && res.data.longitude) {
            setoutput(res.data);
            const fileLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${res.data.latitude},${res.data.longitude}`)}`;
            addMessageToMainBox(`Google Maps Link: ${fileLink}`);
          } else {
            setError('No location found from the description.');
          }
        } catch (err) {
          console.error('Error:', err);
          if (err.response) {
            console.error('Response Data:', err.response.data);
            if (err.response.status === 404) {
              setError('The requested resource could not be found.');
            } else {
              setError('An error occurred while finding the location.');
            }
          } else {
            setError('An error occurred while finding the location.');
          }
        }
      };
    
      getData();
    
      // Landmark detection logic added here
      if (fileInput) {
        const getLandmarkData = async () => {
          try {
            const landmarkEndpoint = 'http://127.0.0.1:8000/api/detect-landmark/'; // Endpoint for landmark detection
            const formData = new FormData();
            formData.append('image_file', fileInput);
    
            const res = await axios.post(landmarkEndpoint, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              }
            });
    
            console.log('Response from landmark endpoint:', res.data);
    
            if (res.data.landmark_description) {
              addMessageToMainBox({text:res.data,file:null,option:"Find Location and Generate Google Maps Link"})
              addMessageToMainBox(`Landmark Description: ${res.data.landmark_description}`);
            } else {
              setError('No landmark detected from the image.');
            }
          } catch (err) {
            console.error('Error:', err);
            if (err.response) {
              console.error('Response Data:', err.response.data);
              if (err.response.status === 404) {
                setError('The requested resource could not be found.');
              } else {
                setError('An error occurred while detecting the landmark.');
              }
            } else {
              setError('An error occurred while detecting the landmark.');
            }
          }
        };
    
        getLandmarkData();
      } else {
        setError('Please upload an image file for landmark detection.');
      }
    
      setInput('');
      setError('');
    }
    
    else if (selectedOption === "Audio Transcription & Summarization") {
      if (!fileInput) {
        setError('Please upload an audio file.');
        return;
      }
    
      const getData = async () => {
        try {
          // Create FormData to send the file
          const formData = new FormData();
          formData.append('audio_file', fileInput);
    
          // Make HTTP request to the transcription API
          const res = await axios.post('http://127.0.0.1:8000/api/transcribe-audio/', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          console.log('Response:', res.data);
    
          // Handle the response
             //-->>>ouput 
          addMessageToMainBox({text:res.data,file:null,option:"Audio Transcription & Summarization"});
          if (res.data.transcription) {
            addMessageToMainBox(`Transcription: ${res.data.transcription}`); // Display the transcription
            if (res.data.summary) {
              addMessageToMainBox(`Summary: ${res.data.summary}`); // Display the summary, if available
            }
          } else {
            setError('No transcription available.');
          }
        } catch (err) {
          console.error('Error:', err);
          if (err.response && err.response.data) {
            console.error('Response Data:', err.response.data);
          }
          setError('An error occurred while transcribing the audio.');
        }
      };
    
      getData(); // Call the function to execute the request
    
      const message = { text: `Audio File: ${fileInput.name}` };
      addMessageToMainBox(message); // Send the input and file to MainBox
      setInput(''); // Clear the input after submission
      setFileInput(null); // Clear file input after submission
      setError(''); // Clear any previous error messages
    }
    

    else if (selectedOption === "Text Summarization") {
      if (!input) {
        setError('Please enter some text.');
        return;
      } else {
        const getData = async () => {
          try {
            const csrfToken = Cookies.get('csrftoken'); // Get CSRF token
            console.log('CSRF Token:', csrfToken); // Debugging line

            const res = await axios.post('http://127.0.0.1:8000/api/summarize-text/', {
              text_input: input, // Send the input text to the backend
            }, {
              headers: {
                'X-CSRFToken': csrfToken, // Add CSRF token to headers
              },
            });

            console.log('Response:', res.data); // Debugging line

            // Handle the response here
               //-->>>ouput 
            addMessageToMainBox({text:res.data,file:null,option:"Text Summarization"})
            if (res.data.summary) {
              addMessageToMainBox(res.data.summary); // Display the summary
            } else {
              setError('No summary available.');
            }
          } catch (err) {
            console.error('Error:', err); // Improved error logging
            if (err.response) {
              console.error('Response Data:', err.response.data); // Log response data on error
            }
            setError('An error occurred while summarizing the text.');
          }
        };

        getData(); // Call the function to execute the request
        addMessageToMainBox(message);
        setInput('');  // Clear the input after submission
        setFileInput(null);  // Clear file input after submission
        setError('');
      }
    }


    else if (selectedOption === "Psychological Profile Summarization") {
      if (!input) {
        setError('Please enter some text.');
        return;
      } else {
        const getData = async () => {
          try {
            // Get CSRF token
            // const csrfToken = Cookies.get('csrftoken');


            // Make HTTP request
            const res = await axios.post('http://127.0.0.1:8000/api/summarize-profile/', {
              profile_input: input, // Send the profile input as JSON
            }, {
              headers: {

                'Content-Type': 'application/json', // Ensure correct content type
              },
              withCredentials: true, // Ensure credentials are sent with the request
            });

            console.log('Response:', res.data);
            
               //-->>>ouput 
            addMessageToMainBox({text:res.data,file:null,option:"Psychological Profile Summarization"})
            if (res.data.summary) {
              addMessageToMainBox(res.data.summary); // Display the summary
            } else {
              setError('No summary available.');
            }
          } catch (err) {
            console.error('Error:', err); // Improved error logging
            if (err.response) {
              console.error('Response Data:', err.response.data); // Log response data on error
            }
            setError('An error occurred while summarizing the profile.');
          }
        };

        getData(); // Call the function to execute the request

        setInput('');  // Clear the input after submission
        setFileInput(null);  // Clear file input after submission (if applicable)
        setError('');  // Clear any previous error messages
      }
    }

    /*else if (!input) {
      setError('Please enter some text.');
      return;
    }*/

    /*addMessageToMainBox(message);  // Send the input and file to MainBox
    setInput('');  // Clear the input after submission
    setFileInput(null);  // Clear file input after submission
    setError('');  // Clear errors*/
  };

  return (
    <div className="flex justify-center items-center w-svw fixed bottom-1">
      <div className={`absolute bottom-5 w-[80%] rounded-2xl mx-2 flex flex-col md:flex-row justify-evenly md:items-center p-4 ${isDarkMode ? 'bg-[#565666]' : 'bg-[#051E3D]'}`}>
        {display && (
          <RadioGroup
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
            isDarkMode={isDarkMode}
          />
        )}


        <div className={`relative md:w-[60%] w-full ${isDarkMode ? 'bg-[#1B1B2A]' : 'bg-[#A8A6A6]'} px-8 rounded-3xl md:h-48`}>
          <div className="h-full py-1 flex">
            <FaBars className="mt-2 block md:hidden" onClick={() => setDisplay(!display)} />
            <TextInput
              isDarkMode={isDarkMode}
              selectedOption={selectedOption}
              input={input}
              setInput={setInput}
              handleFileInput={setFileInput}
            />
          </div>


          <button onClick={handleClick} className={`absolute bottom-2 text-sm right-5 border w-6 h-6 md:w-10 md:h-10 flex justify-center items-center rounded-full 
   {isDarkMode ? 'bg-[#1B1B2A] border-black hover:bg-[#10101a]' : 'bg-[#A8A6A6]  hover:bg-[#9d9b9b]'}`}>
            <FaArrowUp className="w-3 h-3 md:h-6 md:w-6" />
          </button>
        </div>
      </div>

      {error && <p className="text-black ">{error}</p>}
    </div>
  );
};  

export default BottomPanel;