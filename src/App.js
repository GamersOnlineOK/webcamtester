import './App.css';
import React, { useRef, useState } from "react";


function App() {
  const videoRef = useRef(null);
  const [photoURL, setPhotoURL] = useState(null);

  function handleCaptureClick() {
    // Accedemos a la cámara y mostramos el stream de video en el elemento correspondiente
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error(err);
      });
      
    // Tomamos la foto
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png");
    setPhotoURL(dataUrl);
    console.log(photoURL);
  }

  return (
    <div>
      <video ref={videoRef} width="640" height="480" autoPlay />
      <button onClick={handleCaptureClick}>Capturar foto</button>
      {photoURL && <img src={photoURL} alt="Captured photo" />}
    </div>
  );
}

export default App;
