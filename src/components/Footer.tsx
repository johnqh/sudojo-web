// src/components/Footer.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
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
                &copy; {new Date().getFullYear()} Your Company Name. All rights
                reserved.
            </Typography>
            <Typography variant="body2" color="textSecondary">
                Contact: info@yourcompany.com
            </Typography>
        </Box>
    );
};

export default Footer;
