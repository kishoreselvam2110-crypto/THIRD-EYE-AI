import React, { useEffect, useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';
import { speak } from '../utils/voiceUtils';

export const SoundDetector = () => {
  const [model, setModel] = useState(null);
  const [listening, setListening] = useState(false);
  const recognizerRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      const recognizer = speechCommands.create('BROWSER_FFT');
      await recognizer.ensureModelLoaded();
      recognizerRef.current = recognizer;
      setModel(recognizer);
    };
    loadModel();
  }, []);

  const startListening = async () => {
    if (!model) return;
    setListening(true);
    await model.listen(result => {
      const scores = result.scores; // probability array
      const labels = model.wordLabels();
      const maxScore = Math.max(...scores);
      const index = scores.indexOf(maxScore);
      const label = labels[index];
      if (maxScore > 0.75) {
        speak(`Heard ${label}`);
      }
    }, { probabilityThreshold: 0.75 });
  };

  const stopListening = async () => {
    if (model) {
      await model.stopListening();
    }
    setListening(false);
  };

  return (
    <div className='p-4 bg-gray-800 rounded-lg'>
      <h2 className='text-lg mb-2'>Sound Detection</h2>
      {model ? (
        listening ? (
          <button onClick={stopListening} className='bg-red-600 px-4 py-2 rounded'>Stop</button>
        ) : (
          <button onClick={startListening} className='bg-saffron px-4 py-2 rounded'>Start</button>
        )
      ) : (
        <p>Loading model…</p>
      )}
    </div>
  );
};
