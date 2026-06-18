import React from 'react';
import { CameraFeed } from '../../components/CameraFeed';
import { QuickActionCard } from '../../components/QuickActionCard';
import { FiCamera } from 'react-icons/fi';

export default function VisionPage() {
  return (
    <div className='p-4 bg-gray-900 text-white min-h-screen'>
      <h1 className='text-2xl mb-4'>AI Vision</h1>
      <CameraFeed />
    </div>
  );
}
