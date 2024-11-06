import React from 'react';
import { Box, Typography } from '@mui/material';
import { IRenderable } from '../../../renderer/types/protocols';
import { Nullable } from 'Sudojo';

const SectionHeader: React.FC<{ renderable?: Nullable<IRenderable> }> = ({
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
                {renderable?.view?.withTitle()?.text}
            </Typography>
        </Box>
    );
};

export default SectionHeader;
