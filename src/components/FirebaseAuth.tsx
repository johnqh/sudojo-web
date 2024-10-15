// src/components/FirebaseAuth.tsx

import React, { useEffect, useRef } from 'react';
import firebaseui from 'firebaseui'; // Import firebaseui v4.x.x directly
import 'firebaseui/dist/firebaseui.css'; // FirebaseUI CSS
import firebase from 'firebase/app'; // Firebase v8 import
import { auth } from '../firebase'; // Firebase v8 auth instance
import { Box } from '@mui/material';

const FirebaseAuthComponent: React.FC = () => {
  const uiRef = useRef<HTMLDivElement>(null);

  const uiConfig = {
    signInFlow: 'popup' as const, // or 'redirect'
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID, // Use Firebase's auth providers
      firebase.auth.GoogleAuthProvider.PROVIDER_ID, // Google Auth
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        return false; // Prevent automatic redirects after sign-in
      },
    },
  };

  useEffect(() => {
    // Use FirebaseUI AuthUI with Firebase v8
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    if (uiRef.current) {
      ui.start(uiRef.current, uiConfig);
    }

    return () => {
      ui.reset();
    };
  }, [uiConfig]);

  return (
    <Box>
      <div ref={uiRef} />
    </Box>
  );
};

export default FirebaseAuthComponent;