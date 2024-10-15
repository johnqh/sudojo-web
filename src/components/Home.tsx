// src/components/Home.tsx

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Home as HomeIcon, Settings as SettingsIcon, Refresh as RefreshIcon, Help as HelpIcon } from '@mui/icons-material';
import SudokuBoard from './SudokuBoard'; // Your existing SudokuBoard component

const Home: React.FC = () => {
  
  // Placeholder click handlers
  const handleHomeClick = () => {
    console.log('Home button clicked');
  };

  const handleSettingsClick = () => {
    console.log('Settings button clicked');
  };

  const handleRefreshClick = () => {
    console.log('Refresh button clicked');
  };

  const handleHelpClick = () => {
    console.log('Help button clicked');
  };

  const handleNumberClick = (number: number) => {
    console.log(`Number ${number} clicked`);
  };

  return (
    <Box>
      {/* Sudoku Board */}
      <SudokuBoard />

      {/* Buttons row */}
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        mt={2} // Add some margin on top
      >
        {/* Button 1: Home */}
        <Button onClick={handleHomeClick}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <HomeIcon sx={{ fontSize: 32 }} /> {/* Icon with 32px size */}
            <Typography variant="caption">Home</Typography> {/* Button title */}
          </Box>
        </Button>

        {/* Button 2: Settings */}
        <Button onClick={handleSettingsClick}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <SettingsIcon sx={{ fontSize: 32 }} /> {/* Icon with 32px size */}
            <Typography variant="caption">Settings</Typography> {/* Button title */}
          </Box>
        </Button>

        {/* Button 3: Refresh */}
        <Button onClick={handleRefreshClick}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <RefreshIcon sx={{ fontSize: 32 }} /> {/* Icon with 32px size */}
            <Typography variant="caption">Refresh</Typography> {/* Button title */}
          </Box>
        </Button>

        {/* Button 4: Help */}
        <Button onClick={handleHelpClick}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <HelpIcon sx={{ fontSize: 32 }} /> {/* Icon with 32px size */}
            <Typography variant="caption">Help</Typography> {/* Button title */}
          </Box>
        </Button>
      </Box>

      {/* Numbered input buttons row */}
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        mt={2} // Margin on top
      >
        {Array.from({ length: 9 }, (_, i) => (
          <Button
            key={i + 1}
            onClick={() => handleNumberClick(i + 1)}
            variant="contained"
            sx={{ width: 40, height: 40 }} // Square buttons
          >
            {i + 1} {/* Button number */}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Home;