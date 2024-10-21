import React from 'react';
import { Box, Typography } from '@mui/material';
import { Renderable } from '../../../types/protocols';
import ViewController from './ViewController';

const UIWindow: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <ViewController renderable={renderable} />
        </Box>
    );
};
