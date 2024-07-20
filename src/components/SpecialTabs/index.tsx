import React, { useState } from 'react';

interface Screen {
  label: string;
  component: JSX.Element; 
}

interface SpecialTabsProps {
  screens: Screen[];
  defaultTabIndex: number;
}

const SpecialTabs: React.FC<SpecialTabsProps> = ({ screens, defaultTabIndex }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(defaultTabIndex);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="special-tabs-container">
      <div className="tabs">
        {screens.map((screen, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`tab-item ${activeTabIndex === index ? 'active' : ''}`}
          >
            {screen.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {screens[activeTabIndex].component}
      </div>
    </div>
  );
};

export default SpecialTabs;
