// src/App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, AppBar, Toolbar } from '@mui/material';
import AppBarComponent from './components/AppBarComponent';
import DrawerComponent from './components/DrawerComponent';
import MainView from './components/MainView';
import GeneralSettings from './components/GeneralSettings'; // Import GeneralSettings component
import Footer from './components/Footer'; // Import Footer
import { ProfileItem, MenuItem, SettingsItem } from './types';

// Import Material UI icons
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

const drawerWidth = 240;

const menuItems: MenuItem[] = [
  { name: 'Home', icon: <HomeIcon />, path: '/' },
  { name: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  { name: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  { name: 'About', icon: <InfoIcon />, path: '/about' },
];

// Sample data for profile items and settings items
const profileItems: ProfileItem[] = [
  { image: 'https://via.placeholder.com/64', title: 'User 1', subtext: 'Description 1' },
  { image: 'https://via.placeholder.com/64', title: 'User 2', subtext: 'Description 2' },
  { image: 'https://via.placeholder.com/64', title: 'User 3', subtext: 'Description 3' },
  { image: 'https://via.placeholder.com/64', title: 'User 4', subtext: 'Description 4' },
  { image: 'https://via.placeholder.com/64', title: 'User 5', subtext: 'Description 5' },
  { image: 'https://via.placeholder.com/64', title: 'User 6', subtext: 'Description 6' },
  { image: 'https://via.placeholder.com/64', title: 'User 7', subtext: 'Description 7' },
  { image: 'https://via.placeholder.com/64', title: 'User 8', subtext: 'Description 8' },
];

const settingsItems: SettingsItem[] = [
  { title: 'General Settings', subtitle: 'Manage general preferences' },
  { title: 'Privacy Settings', subtitle: 'Manage privacy settings' },
];

const AppContent: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <AppBarComponent handleDrawerToggle={handleDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <DrawerComponent
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        menuItems={menuItems}
        drawerWidth={drawerWidth}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: { sm: `${drawerWidth}px` },
          marginTop: '64px', // Offset for AppBar
          overflowY: 'auto', // Ensure scrolling if needed
        }}
      >
        <Routes>
          <Route 
            path="/" 
            element={<MainView selectedMenu="Home" profileItems={profileItems} settingsItems={settingsItems} apiData={[]} />} 
          />
          <Route path="/profile" element={<MainView selectedMenu="Profile" profileItems={profileItems} settingsItems={settingsItems} apiData={[]} />} />
          <Route path="/settings" element={<MainView selectedMenu="Settings" profileItems={profileItems} settingsItems={settingsItems} apiData={[]} />} />
          <Route path="/about" element={<MainView selectedMenu="About" profileItems={profileItems} settingsItems={settingsItems} apiData={[]} />} />
          <Route path="/settings/general" element={<GeneralSettings />} />
        </Routes>
      </Box>

      {/* Footer - positioned below the main content and drawer */}
      <Footer /> 
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