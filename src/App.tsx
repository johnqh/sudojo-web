import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  CssBaseline,
  ListItemButton,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaHome, FaUserAlt, FaCog, FaInfoCircle } from 'react-icons/fa';
import './App.css';
import { fetchData } from './api'; // Import the fetch API service

interface MenuItem {
  name: string;
  icon: JSX.Element;
}

interface ProfileItem {
  image: string;
  title: string;
  subtext: string;
}

const drawerWidth = 240;

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

const MainView: React.FC<{ selectedMenu: string; apiData: string | null }> = ({ selectedMenu, apiData }) => {
  return (
    <Box className="main-view">
      <Typography variant="h4" component="h1" gutterBottom>
        {selectedMenu}
      </Typography>

      {/* Check if "Profile" is selected and render the profile items as tiles */}
      {selectedMenu === 'Profile' ? (
        <Grid container spacing={2}>
          {profileItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{ width: 32, height: 32, margin: '16px auto' }} // 32x32 image with center alignment
                />
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.subtext}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        apiData && <Typography variant="body1">{apiData}</Typography>
      )}
    </Box>
  );
};

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

    if (menu !== 'Profile') {
      // Make an API call using fetch when a menu item is clicked
      try {
        const data = await fetchData('example-endpoint'); // Replace with your actual endpoint
        setApiData(JSON.stringify(data, null, 2)); // Display the fetched data
      } catch (error) {
        setApiData('Failed to load data.');
      }
    } else {
      setApiData(null); // Clear API data when "Profile" is selected
    }
  };

  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />

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
            <button className="login-btn">Log In</button>
          </Toolbar>
        </AppBar>

        <Toolbar /> {/* To offset the content below the AppBar */}
        
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          {/* Drawer for side navigation */}
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              <List>
                {MenuItems.map((item) => (
                  <ListItem key={item.name}>
                    <ListItemButton onClick={() => handleMenuClick(item.name)}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: '64px' }, // Push the drawer below AppBar
              }}
              open
            >
              <List>
                {MenuItems.map((item) => (
                  <ListItem key={item.name}>
                    <ListItemButton onClick={() => handleMenuClick(item.name)}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          {/* Main content */}
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, marginTop: '64px' }} // Adds margin to avoid overlap with AppBar
          >
            <MainView selectedMenu={selectedMenu} apiData={apiData} />
          </Box>
        </Box>
      </Box>
    </Router>
  );
};

export default App;