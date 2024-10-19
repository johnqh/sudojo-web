import React from 'react';
import { Button } from '@mui/material';
import { Renderable } from '../../types/protocols';
import Sudojo from 'Sudojo';

const Action: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    const handleClick = () => {
        Sudojo.com.sudobility.sudokuschool.statemanager.AppState.Companion.instance?.navigate(
            renderable
        );
    };

    return (
        <Button
            variant="contained"
            sx={{
                backgroundColor: 'blue', // Set button background to blue
                color: 'white', // Set text color to white
                '&:hover': {
                    backgroundColor: 'darkblue', // Darker blue on hover
                },
            }}
            onClick={handleClick}
        >
            {renderable?.display?.labels?.title?.text}
        </Button>
    );
};

export default Action;
