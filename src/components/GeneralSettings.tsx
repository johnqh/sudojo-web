// src/components/GeneralSettings.tsx

import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography, List, ListItem } from '@mui/material';
import Toggle from './Toggle'; // Import Toggle component

const GeneralSettings: React.FC = () => {
  // State for checkboxes and dropdowns
  const [checkboxValues, setCheckboxValues] = useState(
    Array(30).fill(false) // 20 for section 1 and 10 for section 2
  );
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  // Handle checkbox state
  const handleCheckboxChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckboxValues = [...checkboxValues];
    newCheckboxValues[index] = event.target.checked;
    setCheckboxValues(newCheckboxValues);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>General Settings</Typography>

      {/* Section 1 */}
      <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>Section 1</Typography>
      <List>
        {Array.from({ length: 20 }).map((_, index) => (
          <ListItem key={index}>
            <Toggle
              label={`Option ${index + 1}`}
              checked={checkboxValues[index]}
              onChange={handleCheckboxChange(index)}
            />
          </ListItem>
        ))}
      </List>

      {/* Section 2 */}
      <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>Section 2</Typography>
      <List>
        {Array.from({ length: 10 }).map((_, index) => (
          <ListItem key={index + 20}>
            <Toggle
              label={`Option ${index + 21}`}
              checked={checkboxValues[index + 20]}
              onChange={handleCheckboxChange(index + 20)}
            />
          </ListItem>
        ))}

        {/* First popup menu control */}
        <ListItem>
          <FormControl fullWidth>
            <InputLabel id="select-option1-label">Select Language</InputLabel>
            <Select
              labelId="select-option1-label"
              value={selectedOption1}
              label="Select Language"
              onChange={(e) => setSelectedOption1(e.target.value as string)}
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="spanish">Spanish</MenuItem>
              <MenuItem value="french">French</MenuItem>
            </Select>
          </FormControl>
        </ListItem>

        {/* Second popup menu control */}
        <ListItem>
          <FormControl fullWidth>
            <InputLabel id="select-option2-label">Select Theme</InputLabel>
            <Select
              labelId="select-option2-label"
              value={selectedOption2}
              label="Select Theme"
              onChange={(e) => setSelectedOption2(e.target.value as string)}
            >
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
              <MenuItem value="system">System Default</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
      </List>
    </Box>
  );
};

export default GeneralSettings;