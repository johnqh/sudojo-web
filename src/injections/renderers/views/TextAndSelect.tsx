import React, { useState } from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from '@mui/material';
import { IRenderable } from '../../../renderer/types/protocols';
import { UIDevice } from '../../../renderer/utils/UIDevice';
import { Nullable } from 'Sudojo';

const TextAndSelect: React.FC<{ renderable?: Nullable<IRenderable> }> = ({
    renderable,
}) => {
    const handleClick = () => {
        //   Sudojo.com.sudobility.sudokuschool.statemanager.AppState.Companion.instance?.navigate(renderable)
    };

    const height = UIDevice.isIOSOrIPad() ? '44px' : '48px';

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            style={{ height }} // Apply the height dynamically
        >
            {/* Left Text */}
            <Typography variant="body1" style={{ marginRight: '16px' }}>
                {renderable?.view?.withTitle()?.text}
            </Typography>

            {/* Right Popup Menu */}
            <FormControl variant="outlined">
                <InputLabel>Select</InputLabel>
                <Select
                    value={renderable?.view?.withSubtitle()?.text}
                    onChange={handleClick}
                    label="Select"
                >
                    {renderable?.view?.withChildren()?.map((child, index) => (
                        <MenuItem
                            key={index}
                            value={child.view?.withTitle()?.text}
                        >
                            {child.view?.withTitle()?.text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default TextAndSelect;
