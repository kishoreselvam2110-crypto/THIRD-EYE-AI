"use client";
import React, { useRef, useEffect, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';
import { speak } from '../utils/voiceUtils';

export const CameraFeed = () => {
  const videoRef = useRef(null);
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load the COCO‑SSD model once
  useEffect(() => {
    const loadModel = async () => {
      const loaded = await cocoSsd.load();
      setModel(loaded);
      setLoading(false);
    };
    loadModel();
  }, []);

  // Start video stream
  useEffect(() => {
    const startVideo = async () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    };
    startVideo();
  }, []);

  // Run detection every second
  useEffect(() => {
    if (!model) return;
    const ctx = videoRef.current;
    const detect = async () => {
      const predictions = await model.detect(ctx);
      if (predictions.length > 0) {
        // Take the top prediction and speak it
        const top = predictions[0];
        speak(`Detected ${top.class}`);
      }
    };
    const interval = setInterval(detect, 1500);
    return () => clearInterval(interval);
  }, [model]);

  return (
    <div className='relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden'>
      {loading && <p className='absolute inset-0 flex items-center justify-center text-white'>Loading model…</p>}
      <video ref={videoRef} className='w-full h-full object-cover' muted />
    </div>
  );
};
