// src/App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import AppBarComponent from './components/AppBarComponent';
import DrawerComponent from './components/DrawerComponent';
import MainView from './components/MainView';
import { ProfileItem, MenuItem, SettingsItem } from './types';

// Import Material UI icons
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

const drawerWidth = 240;

const menuItems: MenuItem[] = [
  { name: 'Home', icon: <HomeIcon /> },
  { name: 'Profile', icon: <AccountCircleIcon /> },
  { name: 'Settings', icon: <SettingsIcon /> },
  { name: 'About', icon: <InfoIcon /> },
];

// Add more sample profile data for the tiles
const profileItems: ProfileItem[] = [
  { image: 'https://via.placeholder.com/64', title: 'User 1', subtext: 'Description 1' },
  { image: 'https://via.placeholder.com/64', title: 'User 2', subtext: 'Description 2' },
  { image: 'https://via.placeholder.com/64', title: 'User 3', subtext: 'Description 3' },
  { image: 'https://via.placeholder.com/64', title: 'User 4', subtext: 'Description 4' },
  { image: 'https://via.placeholder.com/64', title: 'User 5', subtext: 'Description 5' },
  { image: 'https://via.placeholder.com/64', title: 'User 6', subtext: 'Description 6' },
  { image: 'https://via.placeholder.com/64', title: 'User 7', subtext: 'Description 7' },
  { image: 'https://via.placeholder.com/64', title: 'User 8', subtext: 'Description 8' },
  { image: 'https://via.placeholder.com/64', title: 'User 9', subtext: 'Description 9' },
  { image: 'https://via.placeholder.com/64', title: 'User 10', subtext: 'Description 10' },
];

// Mock settings items
const settingsItems: SettingsItem[] = [
  { title: 'General Settings', subtitle: 'Manage your general preferences' },
  { title: 'Privacy Settings', subtitle: 'Control your privacy options' },
];

// Mock API data
const apiData = [
  { id: 1, name: 'API Data Item 1' },
  { id: 2, name: 'API Data Item 2' },
];

const AppContent: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
      <DrawerComponent
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        menuItems={menuItems}
        handleMenuClick={setSelectedMenu}
        drawerWidth={drawerWidth}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginLeft: { sm: `${drawerWidth}px` },
          marginTop: '64px',
        }}
      >
        <MainView
          selectedMenu={selectedMenu}
          profileItems={profileItems}
          settingsItems={settingsItems}
          apiData={apiData}
        />
      </Box>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <AppContent />
    </Router>
  );
};

export default App;