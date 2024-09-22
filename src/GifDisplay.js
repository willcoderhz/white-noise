import React from 'react';
import './GifDisplay.css';  // Add styling for full screen

const GifDisplay = ({ gifSrc, onReturn }) => {
  return (
    <div className="gif-container">
      <img src={gifSrc} alt="Relaxing GIF" className="gif-image" />
      <button onClick={onReturn} className="return-button">Return</button>
    </div>
  );
};

export default GifDisplay;