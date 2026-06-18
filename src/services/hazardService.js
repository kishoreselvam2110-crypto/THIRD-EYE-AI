// src/services/hazardService.js
export const fetchHazards = async () => {
  const res = await fetch('/api/hazards');
  if (!res.ok) {
    throw new Error('Failed to load hazards');
  }
  const data = await res.json();
  return data.features || [];
};
