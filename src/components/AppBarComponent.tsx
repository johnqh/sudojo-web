import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../AuthContext';
import { auth } from '../firebase'; // Import auth instance from firebase
import { Box } from '@mui/system';

interface AppBarProps {
  handleDrawerToggle: () => void;
  handleLoginOpen: () => void;
}

const AppBarComponent: React.FC<AppBarProps> = ({ handleDrawerToggle, handleLoginOpen }) => {
  const { currentUser } = useAuth();

  // Handle sign out with Firebase v8 API
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Correct method call for Firebase v8
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
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