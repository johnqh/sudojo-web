// src/components/MainView.tsx

import React from 'react';
import { Box, Typography, Grid, List, ListItemButton, ListItemText } from '@mui/material';
import Tile from './Tile';
import SudokuBoard from './SudokuBoard';
import { ProfileItem, SettingsItem } from '../types';

interface MainViewProps {
  selectedMenu: string;
  profileItems: ProfileItem[];
  settingsItems: SettingsItem[];
  apiData: string | null;
}

const MainView: React.FC<MainViewProps> = ({ selectedMenu, profileItems, settingsItems, apiData }) => {
  return (
    <Box className="main-view">
      <Typography variant="h4" component="h1" gutterBottom>
        {selectedMenu}
      </Typography>

      {/* Render content based on selected menu */}
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
              <ListItemText primary={item.title} secondary={item.subtitle} />
            </ListItemButton>
          ))}
        </List>
      ) : (
        // For any other menu items (e.g., "About"), display API data or a placeholder
        apiData ? (
          <Typography variant="body1">{apiData}</Typography>
        ) : (
          <Typography variant="body1">Welcome to the Sudoku App!</Typography>
        )
      )}
    </Box>
  );
};

export default MainView;