import './App.css';
import React from 'react';
import Webcam from "react-webcam";
import { useRef, useCallback } from 'react';


function App() {
  const webcamRef = useRef(null);

  // const capture = useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   // Enviar la imagen a la base de datos
  // }, [webcamRef]);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: { exact: "environment" }
  };

  return (
    <>
    <div>
      <Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => (
          <button
            onClick={() => {
              const imageSrc = getScreenshot()
            }}
          >
            Capture photo
          </button>
        )}
      </Webcam>
      </div>
    </>
  );
}

export default App;
