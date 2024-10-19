// src/components/FirebaseAuth.tsx

import React, { useEffect, useRef } from 'react';
import firebase from 'firebase/app'; // Firebase v8 import
import 'firebase/auth'; // Firebase Auth
import * as firebaseui from 'firebaseui'; // FirebaseUI import
import 'firebaseui/dist/firebaseui.css'; // FirebaseUI CSS
import { Box } from '@mui/material';
import { auth } from '../firebase'; // Firebase auth instance

// Manually declare the type for FirebaseUI since there are no official TypeScript types
interface FirebaseUIAuth {
    start: (element: HTMLElement, config: any) => void;
    reset: () => void;
}

let ui: FirebaseUIAuth | null = null; // Store the FirebaseUI instance

const FirebaseAuthComponent: React.FC = () => {
    const uiRef = useRef<HTMLDivElement>(null);

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false, // Prevent automatic redirects
        },
    };

    useEffect(() => {
        if (!ui) {
            // Create a new FirebaseUI instance
            ui = new (firebaseui as any).AuthUI(auth);
        }

        if (uiRef.current && ui) {
            // Ensure ui is not null
            ui.start(uiRef.current, uiConfig); // Start the FirebaseUI widget
        }

        return () => {
            ui?.reset(); // Cleanup the FirebaseUI instance when the component unmounts
        };
    }, [uiConfig]);

    return (
        <Box>
            <div ref={uiRef} />
        </Box>
    );
};

export default FirebaseAuthComponent;
