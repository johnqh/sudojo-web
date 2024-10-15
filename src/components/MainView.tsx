// src/components/MainView.tsx

import React from 'react';
import { ProfileItem, SettingsItem } from '../types';
import Home from './Home';
import SettingsView from './SettingsView';
import ProfileView from './ProfileView';
import AboutView from './AboutView'; // Import the AboutView component
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
}) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <h1>{selectedMenu}</h1>

      <div
        style={{
          flexGrow: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {selectedMenu === 'Home' && <Home />}
        {selectedMenu === 'Profile' && <ProfileView profileItems={profileItems} />}
        {selectedMenu === 'Settings' && <SettingsView settingsItems={settingsItems} />}
        {selectedMenu === 'About' && <AboutView />} {/* Render AboutView when "About" is selected */}
      </div>
    </div>
  );
};

export default MainView;