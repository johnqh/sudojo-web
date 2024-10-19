// src/components/CenteredTile.tsx

import React from 'react';
import { Typography, Box } from '@mui/material';
import BaseTile, { TileProps } from './BaseTile';

const CenteredTile: React.FC<TileProps> = (props) => {
    const renderTitleAndText = (title: string, subtext: string) => (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" gutterBottom textAlign="center">
                {title}
            </Typography>
            <Typography
                variant="body2"
                color="textSecondary"
                textAlign="center"
            >
                {subtext}
            </Typography>
        </Box>
    );

    return <BaseTile {...props} renderTitleAndText={renderTitleAndText} />;
};

export default CenteredTile;
