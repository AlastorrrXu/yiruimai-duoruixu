import React, { useState, useRef } from 'react';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <h2>麦一芮为你唱的歌</h2>
      <div className="record">
        <div className={`vinyl ${isPlaying ? 'spinning' : ''}`}></div>
      </div>
      <button onClick={togglePlayPause}>
        {isPlaying ? '暂停' : '播放'}
      </button>
      <audio ref={audioRef} src="/music/song.mp3" />
    </div>
  );
}

export default MusicPlayer;
