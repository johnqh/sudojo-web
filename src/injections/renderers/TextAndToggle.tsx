import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { Renderable } from '../../types/protocols';
import Sudojo from 'Sudojo';

const TextAndToggle: React.FC<{ renderable?: Renderable | null }> = ({
    renderable,
}) => {
    const handleClick = () => {
        //   Sudojo.com.sudobility.sudokuschool.statemanager.AppState.Companion.instance?.navigate(renderable)
    };
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={
                        renderable?.display?.presentation?.asItem?.value == '1'
                    }
                    onChange={handleClick}
                />
            }
            label={renderable?.display?.labels?.title?.text}
        />
    );
};

export default TextAndToggle;
