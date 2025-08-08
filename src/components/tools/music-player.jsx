import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

// audio file
import Song from "../../assets/garden-of-eden.mp3";
// css
import "./music-player.css";

export default function MusicPlayer() {
  // STATES
  // ifPlaying: tracking if the song is playing or paused
  const [ifPlaying, setIfPlaying] = useState(false);
  // duration: song's total length
  const [duration, setDuration] = useState(0);
  // time: current playback in seconds
  const [time, setTime] = useState(0);

  // REFERENCE
  // audioRef: referencing he audio DOM element. that allows me to manipulate it (play, pause, and the progress bar)
  const audioRef = useRef();
  // barRef: referencing the progress bar
  const barRef = useRef();

  // EFFECTS
  // this runs whenever ifPlaying changes
  useEffect(() => {
    if (ifPlaying) {
      audioRef.current.play(); // plays the song
    } else {
      audioRef.current.pause(); //pauses the song
    }
  }, [ifPlaying]);

  // only runs once the component mounts
  useEffect(() => {
    const audio = audioRef.current; // event listener when the audio's metadata is loaded
    const audioData = () => {
      setDuration(audio.duration);
    };

    const audioTime = () => {
      setTime(audio.currentTime);
    }; // event listener when the audio time updates

    // adding the event listeners
    audio.addEventListener("loadedmetadata", audioData);
    audio.addEventListener("timeupdate", audioTime);

    // once the component unmounts, this removes the event listeners
    return () => {
      audio.removeEventListener("loadedmetadata", audioData);
      audio.removeEventListener("timeupdate", audioTime);
    };
  }, []);

  // HANDLERS
  // toggles the ifPlaying state
  const playPauseToggle = () => {
    setIfPlaying((prev) => !prev);
  };

  // when the user drags the progress bar, this updates the audio time
  const progressChange = () => {
    audioRef.current.currentTime = barRef.current.value;
  };

  // FORMAT TIME
  // time format in mm:ss
  const formatTime = (secs) => {
    if (isNaN(secs)) return "00:00";
    const mins = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${String(mins).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="player">
      {/* song metadata */}
      <audio ref={audioRef} src={Song} preload="metadata"></audio>

      {/* music player */}
      <div className="player1">
        {/* song title and artist */}
        <div className="details">
          <h1 className="np">Now Playing...</h1>
          <div>
            <p className="m-title">Garden of Eden</p>
            <p className="sp"> -- </p>
            <p className="artist">Lady Gaga</p>
          </div>
        </div>

        {/* controls */}
        <div className="progress-controls">
          {/* FaPlay should be the only one visible now */}
          <button onClick={playPauseToggle} className="btns">
            {ifPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <span className="duration">{formatTime(time)}</span>
          <input
            type="range"
            ref={barRef}
            value={time}
            max={duration || 0}
            onChange={progressChange}
            className="progress-bar"
          />
          <span className="duration">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
