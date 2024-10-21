import React from 'react';
import { Box, Typography } from '@mui/material';
import { Renderable } from '../../../types/protocols';
import Sudojo from 'Sudojo';

const CenteredText: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    const handleClick = () => {
        Sudojo.com.sudobility.sudokuschool.statemanager.AppState.Companion.instance?.navigate(
            renderable
        );
    };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center', // Horizontally centered
                alignItems: 'center', // Vertically centered
                width: '100%',
                height: '100%', // Takes up the full height of the parent container
                textAlign: 'center', // Ensures text is centered inside the box
            }}
        >
            <Typography variant="h6" onClick={handleClick}>
                {renderable?.display?.labels?.title?.text}
            </Typography>
        </Box>
    );
};

export default CenteredText;
