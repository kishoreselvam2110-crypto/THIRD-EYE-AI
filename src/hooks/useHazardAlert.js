// src/hooks/useHazardAlert.js
import { useEffect, useRef } from 'react';
import { haversineDistance } from '../utils/distance';
import { speak } from '../utils/voiceUtils';
import { fetchHazards } from '../services/hazardService';

export const useHazardAlert = (options = {}) => {
  const { threshold = 1, vibratePattern = [200, 100, 200] } = options;
  const lastAlertRef = useRef({}); // track last alert time per hazard

  useEffect(() => {
    let isMounted = true;
    let hazards = [];
    const loadHazards = async () => {
      try {
        const data = await fetchHazards();
        hazards = data;
      } catch (e) {
        console.error('Failed to load hazards', e);
      }
    };
    loadHazards();

    const handlePos = (pos) => {
      if (!isMounted) return;
      const { latitude, longitude } = pos.coords;
      hazards.forEach((haz) => {
        const [lng, lat] = haz.geometry.coordinates; // GeoJSON Point
        const dist = haversineDistance(latitude, longitude, lat, lng);
        if (dist <= threshold) {
          const id = haz.id || haz.properties.name;
          const now = Date.now();
          const last = lastAlertRef.current[id] || 0;
          if (now - last > 30000) { // 30s debounce
            const name = haz.properties.name || 'obstacle';
            speak(`Caution! You are approaching ${name}`);
            if (navigator.vibrate) navigator.vibrate(vibratePattern);
            // Optionally dispatch a custom event for UI notification
            const event = new CustomEvent('hazard-alert', { detail: { name, distance: dist } });
            window.dispatchEvent(event);
            lastAlertRef.current[id] = now;
          }
        }
      });
    };

    const watcher = navigator.geolocation.watchPosition(handlePos, (err) => {
      console.warn('Geolocation error', err);
    }, { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 });

    return () => {
      isMounted = false;
      navigator.geolocation.clearWatch(watcher);
    };
  }, [threshold, vibratePattern]);
};
