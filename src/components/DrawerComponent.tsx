// src/components/DrawerComponent.tsx

import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MenuItem } from '../types';

interface DrawerComponentProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  menuItems: MenuItem[];
  handleMenuClick: (menu: string) => void;
  drawerWidth: number;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  mobileOpen,
  handleDrawerToggle,
  menuItems,
  handleMenuClick,
  drawerWidth,
}) => {
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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, top: '64px' }, // Ensure drawer starts below the AppBar
        }}
      >
        <List>
          {menuItems.map((item) => (
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
          display: { xs: 'none', sm: 'block' }, // Show on desktop only
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            top: '64px', // Start the drawer below the app bar
          },
        }}
        open
      >
        <List>
          {menuItems.map((item) => (
            <ListItemButton key={item.name} onClick={() => handleMenuClick(item.name)}>
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