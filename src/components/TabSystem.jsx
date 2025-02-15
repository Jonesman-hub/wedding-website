// TabSystem.jsx
import React from 'react';

const TabSystem = ({ activeTab, setActiveTab, tabs, currentLang }) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex border-b border-sage-300 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-display text-lg transition-colors duration-300 ${
              activeTab === tab.id
                ? 'border-b-2 border-sage-400 text-charcoal-900'
                : 'text-charcoal-700 hover:text-charcoal-900'
            }`}
          >
            {tab.label[currentLang]}
          </button>
        ))}
      </div>
      <div className="min-h-[500px]">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabSystem;
