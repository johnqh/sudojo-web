import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ViewController from './ViewController';

const UIWindow: React.FC<{  }> = ({
}) => {
    const [renderable, _] = useState(null);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <ViewController renderable={renderable} />
        </Box>
    );
};
