import React from 'react';
import { Box, Typography } from '@mui/material';
import { Renderable } from '../../types/protocols';

const SectionHeader: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    return (
        <Box
            sx={{
                height: '24px',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '16px',
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    color: 'lightgray',
                    fontSize: '14px',
                }}
            >
                {renderable?.display?.labels?.title?.text}
            </Typography>
        </Box>
    );
};

export default SectionHeader;
