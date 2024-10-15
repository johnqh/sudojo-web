// src/components/MainView.tsx

import React from 'react';
import { ProfileItem, SettingsItem } from '../types';
import Home from './Home';
import SettingsView from './SettingsView';
import ProfileView from './ProfileView';
import AboutView from './AboutView';
import GeneralSettings from './GeneralSettings'; // Import GeneralSettings
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

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
  const location = useLocation(); // Get current location to handle nested routes

  // Determine the breadcrumb based on the current route
  const breadcrumbItems = () => {
    const breadcrumbs = [
      <Link
        key="home"
        underline="hover"
        color="inherit"
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      >
        Home
      </Link>,
    ];

    if (selectedMenu === 'Settings' || location.pathname.includes('/settings')) {
      breadcrumbs.push(
        <Link
          key="settings"
          underline="hover"
          color="inherit"
          onClick={() => navigate('/settings')}
          style={{ cursor: 'pointer' }}
        >
          Settings
        </Link>
      );

      if (location.pathname.includes('/settings/general')) {
        breadcrumbs.push(<Typography key="general" color="textPrimary">General Settings</Typography>);
      }
    } else if (selectedMenu !== 'Home') {
      breadcrumbs.push(<Typography key={selectedMenu} color="textPrimary">{selectedMenu}</Typography>);
    }

    return breadcrumbs;
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ padding: '16px' }}>
        {breadcrumbItems()}
      </Breadcrumbs>

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
        {selectedMenu === 'Settings' && !location.pathname.includes('/settings/general') && (
          <SettingsView settingsItems={settingsItems} />
        )}
        {location.pathname.includes('/settings/general') && <GeneralSettings />} {/* Render GeneralSettings */}
        {selectedMenu === 'About' && <AboutView />}
      </div>
    </div>
  );
};

export default MainView;