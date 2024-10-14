import React, { useState } from 'react';
import { Box, Typography, FormControl, FormControlLabel, Checkbox, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const GeneralSettings: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  // Use SelectChangeEvent instead of ChangeEvent for the Select component
  const handleSelectChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value as string);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        General Settings
      </Typography>

      {/* Checkbox Item */}
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={handleCheckboxChange} color="primary" />
        }
        label="Enable Feature"
      />

      {/* Select Menu Item */}
      <FormControl fullWidth sx={{ mt: 2 }}>
        <Typography variant="h6">Select Option</Typography>
        <Select value={selectedOption} onChange={handleSelectChange} displayEmpty>
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default GeneralSettings;