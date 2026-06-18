// src/utils/voiceUtils.js
export const speak = (text) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  // Use a louder volume (max 1)
  utterance.volume = 1;
  // Set a clear voice if available (e.g., Hindi or English)
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v => /hindi|english/i.test(v.lang)) || voices[0];
  if (preferred) utterance.voice = preferred;
  window.speechSynthesis.speak(utterance);
};
