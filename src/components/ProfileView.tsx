// src/components/ProfileView.tsx

import React from 'react';
import { ProfileItem } from '../types';
import TileSection from './TileSection'; // Import the TileSection component
import { Box } from '@mui/material';

interface ProfileViewProps {
  profileItems: ProfileItem[];
}

const ProfileView: React.FC<ProfileViewProps> = ({ profileItems }) => {
  const firstSection = profileItems.slice(0, 4); // First four items
  const secondSection = profileItems.slice(4); // Remaining items

  // Create 30 dummy items for section 3
  const section3Items = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));

  return (
    <Box
      sx={{
        height: '100%',
        overflowY: 'auto', // Ensure vertical scrolling if content overflows
        padding: 2,
      }}
    >
      {/* First section with four items */}
      <TileSection title="First Section" items={firstSection} />

      {/* Second section with the remaining items */}
      <TileSection title="Second Section" items={secondSection} />

      {/* Third section with 30 items */}
      <Box sx={{ marginTop: 3 }}>
        <h2>Section 3</h2>
        {section3Items.map((item) => (
          <div key={item.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
            <strong>{item.name}</strong>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default ProfileView;