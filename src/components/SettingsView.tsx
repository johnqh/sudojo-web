// src/components/SettingsView.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SettingsItem } from '../types';

interface SettingsViewProps {
  settingsItems: SettingsItem[];
}

const SettingsView: React.FC<SettingsViewProps> = ({ settingsItems }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100%',
        overflowY: 'auto',
        padding: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>Settings</Typography>
      {settingsItems.map((item, index) => (
        <Box
          key={index}
          sx={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}
          onClick={() => {
            if (item.title === 'General Settings') {
              navigate('/settings/general'); // Navigate to General Settings view
            }
          }}
        >
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body2">{item.subtitle}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SettingsView;