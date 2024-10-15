// src/components/MainView.tsx

import React from 'react';
import { ProfileItem, SettingsItem } from '../types';
import Home from './Home';
import TileSection from './TileSection';
import { useNavigate } from 'react-router-dom';

interface MainViewProps {
  selectedMenu: string;
  profileItems: ProfileItem[];
  settingsItems: SettingsItem[];
  apiData: { id: number; name: string }[];
}

const MainView: React.FC<MainViewProps> = ({
  selectedMenu,
  profileItems,
  settingsItems,
  apiData,
}) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Make sure it takes the full viewport height
      }}
    >
      {/* Title */}
      <h1>{selectedMenu}</h1>

      {/* Content area */}
      <div
        style={{
          flexGrow: 1,         // Ensure it grows to take available space
          overflow: 'hidden',  // Prevent the entire content from overflowing
          display: 'flex',     // Flex container for children
          flexDirection: 'column',
        }}
      >
        {selectedMenu === 'Home' && <Home />}
        
        {selectedMenu === 'Profile' && (
          <>
            <TileSection title="First Section" items={profileItems.slice(0, 4)} />
            <TileSection title="Second Section" items={profileItems.slice(4)} />
          </>
        )}

        {selectedMenu === 'Settings' && (
          <div
            style={{
              flexGrow: 1,           // Make the settings content fill the remaining space
              overflowY: 'auto',     // Allow scrolling for settings content
            }}
          >
            <h2>Settings</h2>
            {settingsItems.map((item, index) => (
              <div
                key={index}
                style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}
                onClick={() => {
                  if (item.title === 'General Settings') {
                    navigate('/settings/general'); // Navigate to General Settings
                  }
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainView;