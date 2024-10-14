// src/App.tsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Box,
  CssBaseline,
  ListItemButton,
  Grid,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaHome, FaUserAlt, FaCog, FaInfoCircle } from 'react-icons/fa';
import './App.css';
import { fetchData } from './api';
import Tile from './Tile';
import GeneralSettings from './GeneralSettings';
import SudokuBoard from './SudokuBoard'; // Import the SudokuBoard component

interface MenuItem {
  name: string;
  icon: JSX.Element;
}

interface ProfileItem {
  image: string;
  title: string;
  subtext: string;
}

interface SettingsItem {
  title: string;
  subtitle: string;
  onClick?: () => void;
}

const drawerWidth = 240;

// Define menu items
const MenuItems: MenuItem[] = [
  { name: 'Home', icon: <FaHome /> },
  { name: 'Profile', icon: <FaUserAlt /> },
  { name: 'Settings', icon: <FaCog /> },
  { name: 'About', icon: <FaInfoCircle /> },
];

// Sample profile data
const profileItems: ProfileItem[] = [
  { image: 'https://via.placeholder.com/32', title: 'Item 1', subtext: 'Subtext 1' },
  { image: 'https://via.placeholder.com/32', title: 'Item 2', subtext: 'Subtext 2' },
  { image: 'https://via.placeholder.com/32', title: 'Item 3', subtext: 'Subtext 3' },
  { image: 'https://via.placeholder.com/32', title: 'Item 4', subtext: 'Subtext 4' },
];

// Main view component
const MainView: React.FC<{ selectedMenu: string; apiData: string | null }> = ({ selectedMenu, apiData }) => {
  const navigate = useNavigate(); // Use navigate hook for navigation

  // Sample settings data with navigation action for General Settings
  const settingsItems: SettingsItem[] = [
    {
      title: 'General Settings',
      subtitle: 'Configure general preferences',
      onClick: () => navigate('/settings/general'), // Navigate to the General Settings view
    },
    { title: 'Notification Settings', subtitle: 'Set up notification options' },
    { title: 'Privacy Settings', subtitle: 'Manage your privacy options' },
    { title: 'Account Settings', subtitle: 'Manage account details' },
  ];

  return (
    <Box className="main-view">
      <Typography variant="h4" component="h1" gutterBottom>
        {selectedMenu}
      </Typography>

      {/* Render components based on selected menu */}
      {selectedMenu === 'Home' ? (
        <SudokuBoard /> // Render SudokuBoard when "Home" is selected
      ) : selectedMenu === 'Profile' ? (
        <Grid container spacing={2}>
          {profileItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Tile image={item.image} title={item.title} subtext={item.subtext} />
            </Grid>
          ))}
        </Grid>
      ) : selectedMenu === 'Settings' ? (
        <List>
          {settingsItems.map((item, index) => (
            <ListItemButton key={index} onClick={item.onClick}>
              <ListItemIcon>
                {/* Optionally add icons based on settings */}
              </ListItemIcon>
              <ListItemText primary={item.title} secondary={item.subtitle} />
            </ListItemButton>
          ))}
        </List>
      ) : (
        apiData && <Typography variant="body1">{apiData}</Typography>
      )}
    </Box>
  );
};

// Main App component with routing
const App: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('Home');
  const [apiData, setApiData] = useState<string | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = async (menu: string) => {
    setSelectedMenu(menu);
    setMobileOpen(false);

    if (menu !== 'Profile' && menu !== 'Settings') {
      // Make an API call using fetch when a menu item is clicked
      try {
        const data = await fetchData('example-endpoint'); // Replace with your actual endpoint
        setApiData(JSON.stringify(data, null, 2)); // Display the fetched data
      } catch (error) {
        setApiData('Failed to load data.');
      }
    } else {
      setApiData(null); // Clear API data when "Profile" or "Settings" is selected
    }
  };

  return (
    <Router>
      <CssBaseline />
      <Box
        sx={{
          maxWidth: '1024px', // Maximum width of the layout
          margin: '0 auto',    // Center the layout
          width: '100%',       // Full width on smaller screens
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {/* AppBar for top navigation */}
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>
            <Button color="inherit">Log In</Button>
          </Toolbar>
        </AppBar>

        <Toolbar /> {/* Spacer to push content below AppBar */}

        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          {/* Drawer for side navigation */}
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
            {/* Temporary drawer for mobile */}
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              <List>
                {MenuItems.map((item) => (
                  <ListItemButton key={item.name} onClick={() => handleMenuClick(item.name)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>

            {/* Permanent drawer for desktop */}
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { 
                  boxSizing: 'border-box', 
                  width: drawerWidth, 
                  top: '64px' // Offset to place below AppBar
                },
              }}
              open
            >
              <List>
                {MenuItems.map((item) => (
                  <ListItemButton key={item.name} onClick={() => handleMenuClick(item.name)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </Box>

          {/* Main content with Routes */}
          <Box
            component="main"
            sx={{ 
              flexGrow: 1, 
              p: 3, 
              width: { sm: `calc(100% - ${drawerWidth}px)` }, 
              marginTop: '64px' // Spacer to prevent content from being hidden behind AppBar
            }}
          >
            <Routes>
              <Route
                path="/"
                element={<MainView selectedMenu={selectedMenu} apiData={apiData} />}
              />
              <Route path="/settings/general" element={<GeneralSettings />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
};

export default App;