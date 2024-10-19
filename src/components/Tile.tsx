// src/components/Tile.tsx

import React from 'react';
import { Typography } from '@mui/material';
import BaseTile, { TileProps } from './BaseTile';

const Tile: React.FC<TileProps> = (props) => {
    const renderTitleAndText = (title: string, subtext: string) => (
        <>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {subtext}
            </Typography>
        </>
    );

    return <BaseTile {...props} renderTitleAndText={renderTitleAndText} />;
};

export default Tile;
