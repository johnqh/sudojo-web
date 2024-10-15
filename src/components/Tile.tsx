// src/components/Tile.tsx

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface TileProps {
  image: string;
  title: string;
  subtext: string;
}

const Tile: React.FC<TileProps> = ({ image, title, subtext }) => {
  return (
    <Card>
      <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ width: 64, height: 64, borderRadius: '50%' }}
        />
      </Box>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {subtext}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Tile;