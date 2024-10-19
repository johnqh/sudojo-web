// src/components/Toggle.tsx

import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

interface ToggleProps {
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle: React.FC<ToggleProps> = ({ label, checked, onChange }) => {
    return (
        <FormControlLabel
            control={<Checkbox checked={checked} onChange={onChange} />}
            label={label}
        />
    );
};

export default Toggle;
