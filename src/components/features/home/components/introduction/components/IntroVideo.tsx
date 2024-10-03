'use client';

import React, { useRef, useState, useEffect } from 'react';
import styles from '../styles.module.css';

export const IntroVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoLoaded && videoRef.current) {
      console.log('video play');
      videoRef.current.play();
    }
  }, [videoLoaded]);

  console.log('mounted', videoLoaded);

  return (
    <video
      ref={videoRef}
      className={`${styles.video} ${videoLoaded ? styles.videoVisible : ''}`}
      autoPlay
      loop
      muted
      onLoadedData={() => {
        setVideoLoaded(true);
        console.log('video loaded');
      }}
    >
      <source src="https://vimeo.com/942971586?share=copy" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
