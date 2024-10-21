import React, { useState } from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from '@mui/material';
import { Renderable } from '../../../types/protocols';
import Sudojo from 'Sudojo';
import { UIDevice } from '../../utils/UIDevice';

const TextAndSelect: React.FC<{ renderable?: Renderable | null }> = ({
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
                {renderable?.display?.labels?.title?.text}
            </Typography>

            {/* Right Popup Menu */}
            <FormControl variant="outlined">
                <InputLabel>Select</InputLabel>
                <Select
                    value={renderable?.display?.labels?.text?.text}
                    onChange={handleClick}
                    label="Select"
                >
                    {renderable?.children?.map((child, index) => (
                        <MenuItem
                            key={index}
                            value={child.display?.labels?.title?.text}
                        >
                            {child.display?.labels?.title?.text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default TextAndSelect;
