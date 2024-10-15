// src/App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import AppBarComponent from './components/AppBarComponent';
import DrawerComponent from './components/DrawerComponent';
import MainView from './components/MainView';
import { ProfileItem, MenuItem } from './types';

const drawerWidth = 240;

const menuItems: MenuItem[] = [
  { name: 'Home', icon: <HomeIcon /> },
  { name: 'Profile', icon: <AccountCircleIcon /> },
  { name: 'Settings', icon: <SettingsIcon /> },
  { name: 'About', icon: <InfoIcon /> },
];

const profileItems: ProfileItem[] = [
  { image: 'https://via.placeholder.com/64', title: 'User 1', subtext: 'Description 1' },
  { image: 'https://via.placeholder.com/64', title: 'User 2', subtext: 'Description 2' },
];

const AppContent: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}> {/* Main layout is flexbox */}
      <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
      
      {/* Sidebar */}
      <DrawerComponent
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        menuItems={menuItems}
        handleMenuClick={setSelectedMenu}
        drawerWidth={drawerWidth}
      />
      
      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1, // This will allow main content to expand
          padding: 3,  // Padding around the content
          marginLeft: { sm: `${drawerWidth}px` }, // Adjust to drawer width on larger screens
          marginTop: '64px',  // Ensure content is below the AppBar
        }}
      >
        <MainView selectedMenu={selectedMenu} profileItems={profileItems} />
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