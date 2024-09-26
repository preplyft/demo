"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import 'video.js/dist/video-js.css';
import videojs from 'video.js';

const VideoPlayer = ({ options }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const playerId = "video-element";

  const initializePlayer = () => {
    // Only initialize if it hasn't been done already
    if (!isInitialized) {
      videojs(playerId, options, () => {
        console.log('Player is ready');
      });
      setIsInitialized(true);
    }
  };

  return (
    <div data-vjs-player>
      <video id={playerId} className="video-js vjs-default-skin" />
      <button onClick={initializePlayer}>Play Video</button>
    </div>
  );
};

export default VideoPlayer;