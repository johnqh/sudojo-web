import React from 'react';
import { Box, Typography } from '@mui/material';
import { IRenderable } from '../../../types/protocols';
import * as Sudojo from 'Sudojo';
import { Nullable } from 'Sudojo';

const CenteredText: React.FC<{ renderable?: Nullable<IRenderable> }> = ({
    renderable,
}) => {
    const handleClick = () => {
        Sudojo.com.sudobility.renderable.renderable.state.AppState.Companion.instance?.navigate(
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
                {renderable?.view?.withTitle()?.text}
            </Typography>
        </Box>
    );
};

export default CenteredText;
