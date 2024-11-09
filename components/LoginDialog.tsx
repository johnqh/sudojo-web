// src/components/LoginDialog.tsx

import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@mui/material';
import FirebaseAuthComponent from './FirebaseAuth';

interface LoginDialogProps {
    open: boolean;
    onClose: () => void;
}

const LoginDialog: React.FC<LoginDialogProps> = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>Log In</DialogTitle>
            <DialogContent>
                <FirebaseAuthComponent />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoginDialog;
