// src/components/DrawerComponent.tsx

import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '../types';

interface DrawerComponentProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  menuItems: MenuItem[];
  drawerWidth: number;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  mobileOpen,
  handleDrawerToggle,
  menuItems,
  drawerWidth,
}) => {
  const navigate = useNavigate();

  const handleMenuClick = (path: string) => {
    navigate(path);
    handleDrawerToggle();
  };

  return (
    <>
      {/* Temporary drawer for mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Keeps the drawer mounted
        sx={{
          display: { xs: 'block', sm: 'none' }, // Show on mobile only
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth, 
            top: '64px', // Ensure drawer starts below the AppBar
            backgroundColor: '#f0f0f0', // Set background color to light gray
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItemButton key={item.name} onClick={() => handleMenuClick(item.path)}>
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
          display: { xs: 'none', sm: 'block' }, // Show on desktop only
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            top: '64px', // Start the drawer below the app bar
            backgroundColor: '#f0f0f0', // Set background color to light gray
          },
        }}
        open
      >
        <List>
          {menuItems.map((item) => (
            <ListItemButton key={item.name} onClick={() => handleMenuClick(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerComponent;