"use client";

export const QuickActionCard = ({ title, children }) => (
  <div className="p-4 bg-gray-800 rounded-lg shadow text-white mb-4">
    {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
    {children}
  </div>
);
