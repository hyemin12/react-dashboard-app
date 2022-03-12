import React, { useState } from "react";
import {
  FaPlay,
  FaBackward,
  FaForward,
  FaEllipsisH,
  FaVolumeDown,
  FaPause,
} from "react-icons/fa";
import song from "../playlist/NCT_DREAM_무대로.mp3";
import "../css/musicplayer2.css";
function Music() {
  const [isPlaying, setisPlaying] = useState(false);
  const audio = new Audio(song);
  function handleMusicplay() {
    if (isPlaying) {
      audio.pause();
      setisPlaying(!isPlaying);
    } else {
      audio.play();
      setisPlaying(!isPlaying);
    }
  }
  return (
    <section className="music-wrapper2">
      <div className="music-container">
        <div className="music-info-wrapper">
          <div className="album-img">
            <img
              src="https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/615/027/81615027_1602486194672_1_600x600.JPG/dims/resize/Q_80,0"
              alt=""
            />
          </div>
          <div className="name-wrapper2">
            <h1 className="song-name">무대로(Déjà Vu; 舞代路)</h1>
            <p className="artist-name">NCT DREAM</p>
          </div>
        </div>
        <div className="song">
          <span>00:00</span>
          <span>03:25</span>
        </div>
        <div className="music-btn-group">
          <div className="btn btn-volume">
            <FaVolumeDown />
          </div>
          <div className="btn btn-prev">
            <FaBackward />
          </div>
          <div className="btn btn-play" onClick={handleMusicplay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
          <div className="btn btn-next">
            <FaForward />
          </div>
          <div className="btn btn-list">
            <FaEllipsisH />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Music;
