// TabSystem.jsx
import React from 'react';

const TabSystem = ({ content }) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="min-h-[500px]">
        {content}
      </div>
    </div>
  );
};

export default TabSystem;
