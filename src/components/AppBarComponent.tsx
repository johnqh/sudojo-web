// src/components/AppBarComponent.tsx

import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { auth } from '../firebase'; // Import auth from Firebase setup
import { useAuth } from '../AuthContext';

interface AppBarComponentProps {
    handleDrawerToggle: () => void;
    handleLoginOpen?: () => void;
}

const AppBarComponent: React.FC<AppBarComponentProps> = ({
    handleDrawerToggle,
    handleLoginOpen,
}) => {
    const { currentUser } = useAuth();

    const handleLogout = async () => {
        try {
            // Firebase signOut logic
            await auth.signOut();
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }} // Only show on mobile
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                    Sudoku App
                </Typography>
                {currentUser ? (
                    <Button color="inherit" onClick={handleLogout}>
                        Log Out
                    </Button>
                ) : (
                    <Button color="inherit" onClick={handleLoginOpen}>
                        Log In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
