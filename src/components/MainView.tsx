// src/components/MainView.tsx

import React from 'react';
import { ProfileItem, SettingsItem } from '../types';
import SudokuBoard from './SudokuBoard'; // Import SudokuBoard component
import TileSection from './TileSection'; // Import TileSection component
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
  // Split the profile items into two sections
  const firstSection = profileItems.slice(0, 4); // First four items
  const secondSection = profileItems.slice(4); // Remaining items

  const navigate = useNavigate();

  return (
    <div>
      <h1>{selectedMenu}</h1>
      
      {/* Render SudokuBoard when "Home" is selected */}
      {selectedMenu === 'Home' && (
        <div>
          <SudokuBoard /> {/* Render SudokuBoard here */}
        </div>
      )}
      
      {/* Render profile items in two sections when "Profile" is selected */}
      {selectedMenu === 'Profile' && (
        <>
          {/* First section with four items */}
          <TileSection title="First Section" items={firstSection} />

          {/* Second section with the remaining items */}
          <TileSection title="Second Section" items={secondSection} />
        </>
      )}
      
      {/* Render settings when "Settings" is selected */}
      {selectedMenu === 'Settings' && (
        <div>
          <h2>Settings</h2>
          {settingsItems.map((item, index) => (
            <div
              key={index}
              style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}
              onClick={() => {
                if (item.title === 'General Settings') {
                  navigate('/settings/general'); // Navigate to General Settings
                }
                // Add more navigation logic here for other settings if needed
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainView;