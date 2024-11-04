import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { IRenderable } from '../../../types/protocols';
import { Nullable } from 'Sudojo';

const TextAndToggle: React.FC<{ renderable?: Nullable<IRenderable> }> = ({
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
                        renderable?.view?.withValueText()?.text == "1"
                    }
                    onChange={handleClick}
                />
            }
            label={renderable?.view?.withTitle()?.text}
        />
    );
};

export default TextAndToggle;
