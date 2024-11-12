// src/components/Footer.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import { Nullable } from 'Sudojo';
import { IRenderable } from '../../types/protocols';

const Footer: React.FC<{
	renderable?: Nullable<IRenderable>;
	asScreen: boolean;
	isDarkMode: boolean;
}> = ({ renderable, asScreen, isDarkMode }) => {
    const view = renderable?.withView(asScreen)
    const title = view?.withTitle()?.text;
    const subtitle = view?.withSubtitle()?.text;
    return (
        <Box
            component="footer"
            sx={{
                padding: 2,
                backgroundColor: '#f8f8f8',
                textAlign: 'center',
                width: '100%', // Ensure full width
                position: 'relative',
            }}
        >
            <Typography variant="body2" color="textSecondary">
                &copy; {new Date().getFullYear()} {title}. All rights
                reserved.
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Contact: {subtitle}
            </Typography>
        </Box>
    );
};

export default Footer;
