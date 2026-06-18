'use client';
// src/app/geofence/page.js
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { fetchHazards } from '../../services/hazardService';
import 'leaflet/dist/leaflet.css';

// Dynamically import React-Leaflet components (client side only)
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const CircleMarker = dynamic(() => import('react-leaflet').then(mod => mod.CircleMarker), { ssr: false });
const Tooltip = dynamic(() => import('react-leaflet').then(mod => mod.Tooltip), { ssr: false });

export default function GeofencePage() {
  const [hazards, setHazards] = useState([]);
  const [center, setCenter] = useState([12.9716, 77.5946]); // default Bangalore

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchHazards();
        setHazards(data);
        if (data.length) {
          const [lng, lat] = data[0].geometry.coordinates;
          setCenter([lat, lng]);
        }
      } catch (e) {
        console.error(e);
      }
    };
    load();
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Hazard Map</h1>
      <div className="w-full max-w-2xl h-[400px]">
        <MapContainer center={center} zoom={18} scrollWheelZoom={true} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {hazards.map((haz) => {
            const [lng, lat] = haz.geometry.coordinates;
            const name = haz.properties.name || 'Hazard';
            return (
              <CircleMarker
                key={haz.id || name}
                center={[lat, lng]}
                radius={12}
                pathOptions={{ color: '#ff4444', fillColor: '#ff4444', fillOpacity: 0.6 }}
              >
                {/* Tooltip */}
                <Tooltip>{name}</Tooltip>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}
