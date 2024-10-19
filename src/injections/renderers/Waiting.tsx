import React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { Renderable } from '../../types/protocols';

const Waiting: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%" // Full height of the viewport
        >
            <CircularProgress />
        </Box>
    );
};

export default Waiting;
