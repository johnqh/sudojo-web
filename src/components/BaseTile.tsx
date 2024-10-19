// src/components/BaseTile.tsx

import React from 'react';
import { Card, CardContent, CardMedia, Box } from '@mui/material';

export interface TileProps {
    image?: string; // Image is optional now
    title: string;
    subtext: string;
}

const BaseTile: React.FC<
    TileProps & {
        renderTitleAndText: (title: string, subtext: string) => React.ReactNode;
    }
> = ({ image, title, subtext, renderTitleAndText }) => {
    return (
        <Card>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding={2}
            >
                {image && ( // Conditionally render the image only if it exists
                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                        sx={{
                            width: 64,
                            height: 64,
                            borderRadius: '50%',
                            marginBottom: 2,
                        }} // Image styling
                    />
                )}
            </Box>
            <CardContent>{renderTitleAndText(title, subtext)}</CardContent>
        </Card>
    );
};

export default BaseTile;
