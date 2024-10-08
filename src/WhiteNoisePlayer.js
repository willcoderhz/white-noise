import React, { useState } from 'react';
import './WhiteNoisePlayer.css';
import GifDisplay from './GifDisplay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShip,faCloudRain,faArchway, faMusic, faCrow, faFire, faFrog, faWater, faCloudBolt, faWind, faUmbrellaBeach, faCircle, faBook} from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';


const WhiteNoisePlayer = () => {
  const [isTouched, setIsTouched] = useState({ rain: false, birds: false, fire: false, frogs: false, river:false, thunder: false, rainforest:false, wind:false, tides:false, yoga:false});

  const [volume, setVolume] = useState({
    rain: 1, birds: 1, fire: 1, frogs: 1, river: 1,
    thunder: 1, rainforest: 1, wind: 1, tides: 1, yoga: 1
  });

  // State for controlling GIF display
  const [showGif, setShowGif] = useState(false);
  const [currentGif, setCurrentGif] = useState('');

  // Function to handle showing the GIF
  const displayGif = (gifSrc) => {
    setCurrentGif(`${process.env.PUBLIC_URL}/image/${gifSrc}`);
    setShowGif(true);
  };

  // Function to return to the player
  const returnToPlayer = () => {
    setShowGif(false);
  };

  const handleVolumeChange = (sound, event) => {
    const audioElement = document.getElementById(sound);
    const newVolume = event.target.value;
    audioElement.volume = newVolume;
    setVolume(prevVolume => ({ ...prevVolume, [sound]: newVolume }));
  };

  const VolumeSlider = ({ soundId, handleVolumeChange }) => (
    <input 
      type="range" 
      min="0" 
      max="1" 
      step="0.01" 
      value={volume[soundId]}
      className="volume-slider"
      onChange={(event) => handleVolumeChange(soundId, event)} 
    />
  );
  
  const togglePlay = (sound) => {
    const audioElement = document.getElementById(sound);
    if (!isTouched[sound]) {
      audioElement.play();
      audioElement.loop = true;
    } else {
      audioElement.pause();
      audioElement.loop = false;
      audioElement.currentTime=0;
    }
    setIsTouched({ ...isTouched, [sound]: !isTouched[sound] });
  };
  
  return (
    
    <div className='container'>
      {showGif && <GifDisplay gifSrc={currentGif} onReturn={returnToPlayer} />}
      <h2>Zenic Fantasy</h2>
      <h4>By Erwei Yao</h4>
      <div className='button-row'>
      <button
        onClick={() => togglePlay('rain')}
        className={`button ${isTouched.rain ? 'button-touched' : ''}`}
      >
        <FontAwesomeIcon icon={faCloudRain} className="icon"  />
        Rain
        {isTouched.rain && <VolumeSlider soundId="rain" handleVolumeChange={handleVolumeChange} />}
      </button>
      
      <button
        onClick={() => togglePlay('birds')}
        className={`button ${isTouched.birds ? 'button-touched' : ''}`}
      >
        <FontAwesomeIcon icon={faCrow} className="icon"  />Birds
        {isTouched.birds &&<VolumeSlider soundId="birds" handleVolumeChange={handleVolumeChange} />}
      </button>
      <button
        onClick={() => togglePlay('tides')}
        className={`button ${isTouched.tides ? 'button-touched' : ''}`}
      >
        <FontAwesomeIcon icon={faUmbrellaBeach} className="icon"  />Tides
        {isTouched.tides&&<VolumeSlider soundId="tides" handleVolumeChange={handleVolumeChange} />}
      </button>
      <button
        onClick={() => togglePlay('fire')}
        className={`button ${isTouched.fire ? 'button-touched' : ''}`}
      >
        <FontAwesomeIcon icon={faFire} className="icon" />Fire
        {isTouched.fire&&<VolumeSlider soundId="fire" handleVolumeChange={handleVolumeChange} />}
      </button>
      <button
        onClick={() => togglePlay('frogs')}
        className={`button ${isTouched.frogs ? 'button-touched' : ''}`}
      >
        <FontAwesomeIcon icon={faFrog} className="icon"  />Frogs
        {isTouched.frogs&&<VolumeSlider soundId="frogs" handleVolumeChange={handleVolumeChange} />}
      </button>
      </div>
      
      <div className='button-row'>
      <button
        onClick={() => togglePlay('river')}
        className={`button ${isTouched.river ? 'button-touched' : ''}`}
      >
        <FontAwesomeIcon icon={faWater} className="icon" />River
        {isTouched.river&&<VolumeSlider soundId="river" handleVolumeChange={handleVolumeChange} />}
      </button>
      <button
        onClick={() => togglePlay('thunder')}
        className={`button ${isTouched.thunder ? 'button-touched' : ''}`}
      >
        <FontAwesomeIcon icon={faCloudBolt} className="icon"  />Thunder
        {isTouched.thunder&&<VolumeSlider soundId="thunder" handleVolumeChange={handleVolumeChange} />}
      </button>
      <button
        onClick={() => togglePlay('rainforest')}
        className={`button ${isTouched.rainforest ? 'button-touched' : ''}`}
      >
        <FontAwesomeIcon icon={faPagelines} className="icon"  />Forest
        {isTouched.rainforest&&<VolumeSlider soundId="rainforest" handleVolumeChange={handleVolumeChange} />}
      </button>
      <button
        onClick={() => togglePlay('yoga')}
        className={`button ${isTouched.yoga ? 'button-touched' : ''}`}
      >
        <FontAwesomeIcon icon={faCircle} className="icon"  />Yoga
        {isTouched.yoga&&<VolumeSlider soundId="yoga" handleVolumeChange={handleVolumeChange} />}
      </button>
      <button
        onClick={() => togglePlay('wind')}
        className={`button ${isTouched.wind ? 'button-touched' : ''}`}
      >
        <FontAwesomeIcon icon={faWind} className="icon"  />Wind
        {isTouched.wind&&<VolumeSlider soundId="wind" handleVolumeChange={handleVolumeChange} />}
      </button>
      </div>
      
      <div className='button-row'>
      <button onClick={() => displayGif('background1.gif')} className="img_button1">
          <FontAwesomeIcon icon={faMusic} className="icon" />
            Bonfire
      </button>
      
      
      <button onClick={() => displayGif('background2.gif')} className="img_button2">
          <FontAwesomeIcon icon={faArchway} className="icon" />
           Castle
      </button>
      
      <button onClick={() => displayGif('background3.gif')} className="img_button3">
          <FontAwesomeIcon icon={faBook} className="icon" />
          Neon
      </button>

      <button onClick={() => displayGif('background4.gif')} className="img_button4">
          <FontAwesomeIcon icon={faShip} className="icon" />
          Sea
      </button>

      <button onClick={() => displayGif('background5.gif')} className="img_button5">
          <FontAwesomeIcon icon={faCoffee} className="icon" />
          Chill
      </button>
      </div>
      <audio id="rain" src={`${process.env.PUBLIC_URL}/music/rain.wav`}></audio>
<audio id="birds" src={`${process.env.PUBLIC_URL}/music/birds.wav`}></audio>
<audio id="fire" src={`${process.env.PUBLIC_URL}/music/fire.mp3`}></audio>
<audio id="frogs" src={`${process.env.PUBLIC_URL}/music/frogs.mp3`}></audio>
<audio id="river" src={`${process.env.PUBLIC_URL}/music/river.mp3`}></audio>
<audio id="thunder" src={`${process.env.PUBLIC_URL}/music/thunder.wav`}></audio>
<audio id="rainforest" src={`${process.env.PUBLIC_URL}/music/rainforest.mp3`}></audio>
<audio id="wind" src={`${process.env.PUBLIC_URL}/music/wind.wav`}></audio>
<audio id="tides" src={`${process.env.PUBLIC_URL}/music/tides.wav`}></audio>
<audio id="yoga" src={`${process.env.PUBLIC_URL}/music/yoga.mp3`}></audio>

      <footer className="footer">
      © All rights reserved by Erwei Yao, 2024
        </footer>
    </div>
  );
};

export default WhiteNoisePlayer;
